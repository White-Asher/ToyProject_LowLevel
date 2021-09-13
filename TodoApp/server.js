const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.urlencoded({extended: true}))
app.set('view emgine','ejs');
app.use('/public', express.static('public'))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

require('dotenv').config()

var db;
MongoClient.connect(process.env.DB_URL,{useUnifiedTopology:true}, function(error, client){
    db = client.db('todoapp');
});

app.listen(process.env.PORT,function(){
    console.log('listening on ' + process.env.PORT)
});

app.get('/index',function (req,res){
    res.render('index.ejs');
});

app.get('/',function (req,res){
    res.render('index.ejs');
});

app.get('/write',function (req,res){
    res.render('write.ejs');
});

app.get('/list',function (req,res){
    // 모든 데이터 가져오기 문법
    db.collection('post').find().toArray(function(error,result){
        console.log(result);
        res.render('list.ejs', { posts : result});
    });
});

app.get('/search',(req,res) =>{
    console.log(req.query.value);
    var searchCondition = [
        {
          $search: {
            index: 'titleSearch',
            text: {
              query: req.query.value,
              path: '제목'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
            }
          }
        },
        { $project : { 제목: 1, _id : 0, scroe : {$meta : 'searchScore" '}}}
      ]
    db.collection('post').aggregate(searchCondition).toArray((error,result)=>{
        console.log(result)
        res.render('search.ejs', { posts : result});
    })
});

app.get('/detail/:id' , function(req,res){
    db.collection('post').findOne({_id : parseInt(req.params.id)},function(error,result){
        console.log(result);
        res.render('detail.ejs', { data : result });
        // return res.status(200).send({ message: 'Success!' });
    })
})

app.get('/edit/:id' , function(req,res){
    db.collection('post').findOne({_id : parseInt(req.params.id)},function(error,result){
        console.log(result)
        res.render('edit.ejs', { posts : result });
    })
})

app.put('/edit',function(req, res){
    db.collection('post').updateOne({_id: parseInt(req.body.id) },{ $set : { 제목: req.body.title , 날짜: req.body.date } },function(error,result){
        console.log('수정완료')
        res.redirect('/list')
    })
});

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 


app.get('/login', function(req, res){
    res.render('login.ejs')
});

app.post('/login', passport.authenticate('local', {failureRedirect: '/fail'}), function(req, res){
    res.redirect('/')
});

app.get('/mypage', isLogin, function(req,res){
    console.log(req.user)
    res.render('mypage.ejs',{사용자 : req.user})
});

function isLogin(req, res, next){
    if(req.user){
        // 다음으로 통과시켜라
        next()
    } else {
        res.send('로그인하지 않았습니다.')
    }
}

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false, 
}, function (inputID, inputPw, done) {
    console.log(inputID, inputPw);
    db.collection('login').findOne({ id: inputID }, function (error, result) {
      if (error) return done(error)
      if (!result) return done(null, false, { message: '존재하지않는 아이디요' })
      if (inputPw == result.pw) {
        return done(null, result)
      } else {
        return done(null, false, { message: '비번틀렸어요' })
      }
    })
}));

// id를 이용해 세션을 저장시키는 코드(로그인 성공시 발동)
passport.serializeUser(function (user, done) {
    done(null, user.id)
});

// 나중에 마이페이지 접속시 발동 (이 세션 데이터를 가진 사람을 DB에서 찾아라)
// deserializeUser()은 로그인한 유저의 세션 아이디를 바탕으로 개인정보를 DB에서 찾는 역할을 한다. 
passport.deserializeUser(function (아이디, done) {
    db.collection('login').findOne({id: 아이디},function(error, result){
        done(null, result)
    })
}); 


app.post('/register', function(req,res){
    db.collection('login').insertOne( { id : req.body.id, pw : req.body.pw }, function(error, result) {
        res.redirect('/')
    })
})

// 콜백함수는 순차적 실행을 위해 사용
app.post('/add', function(req, res){
    db.collection('counter').findOne({name: '게시물갯수'}, function(error,result){
        console.log(result.totalPost)
        var totalPostResult = result.totalPost;
        var savePostInDB = { _id: totalPostResult, 작성자 : req.user._id, 날짜:req.body.date, 제목: req.body.title };
        db.collection('post').insertOne(savePostInDB, function(error,result){
            console.log('저장 및 전송 완료');
            res.send('전송완료');
            // counter라는 콜렉션의 totalPost라는 항목을 1증가시켜야 한다.
            db.collection('counter').updateOne({name : '게시물갯수'},{ $inc : {totalPost:1} },function(error,result){
                if(error){return console.log(error)}
            })
        });
    });
});

app.delete('/delete', function(req,res){
    console.log(req.body);
    req.body._id = parseInt(req.body._id);

    var willDeleteData = { _id : req.body._id , 작성자: req.user._id }
    db.collection('post').deleteOne(willDeleteData ,function(error,req){
        console.log('delete complete');
        res.status(200).send({ message: 'Success!' });
        if(error){
            console.log('error');
        }
    });
});

app.use('/shop', require('./routes/shop.js') );
app.use('/board/sub', require('./routes/board.js') );
// app.use는 미들웨어 사용하겠다. 

let multer = require('multer');
var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, './public/image')
    },
    filename : function(req,file,cb){
        cb(null,file.originalname)
    },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('PNG, JPG만 업로드하세요'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
})

var upload = multer({ storage : storage });

app.get('/upload',function(req,res){
    res.render('upload.ejs')
});

app.post('/upload', upload.array('profile', 10) , function(req,res){
    res.send('complete!');
} );

app.get('/image/:imageName' , function (req,res){
    res.sendFile(__dirname + '/public/image/' + req.params.imageName)
})