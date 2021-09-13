var router = require('express').Router();
// 다른 파일이나 라이브러리를 여기에 첨부하겠다.

function isLogin(req, res, next){
    if(req.user){
        // 다음으로 통과시켜라
        next()
    } else {
        res.send('로그인하지 않았습니다.')
    }
}

router.use('/shirts', isLogin);

router.get('/shop/shirts', isLogin, function(req, res){
    res.send('셔츠 파는 페이지입니다.');
});
 
router.get('/shop/pants', isLogin, function(req, res){
    res.send('바지 파는 페이지입니다.');
}); 

module.exports = router;