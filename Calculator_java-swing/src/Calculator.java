import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JButton;
import java.awt.BorderLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JTextField;
import java.awt.Font;
import javax.swing.SwingConstants;

public class Calculator {

	private JFrame frame;
	private String func = "ADD";
	public int firstNumber; 
	
	
	
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Calculator window = new Calculator();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public Calculator() {
		initialize();
	}
	
	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame("Calculator - AshShine");
		frame.setBounds(100, 100, 360, 515);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().setLayout(null);
		
		JLabel textDisplay = new JLabel("0");
		textDisplay.setHorizontalAlignment(SwingConstants.RIGHT);
		textDisplay.setFont(new Font("±¼¸²", Font.BOLD, 40));
		textDisplay.setBounds(12, 10, 316, 58);
		frame.getContentPane().add(textDisplay);
		
		// ROW1
		JButton btnBackspace = new JButton("<-");
		btnBackspace.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(textDisplay.equals("0")) {
					textDisplay.setText("0");
				} 
				else {
							
				}
			}
		});
		btnBackspace.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnBackspace.setBounds(12, 78, 70, 70);
		frame.getContentPane().add(btnBackspace);
		
		JButton btnDelete = new JButton("D");
		btnDelete.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				textDisplay.setText("0");
			}
		});
		btnDelete.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnDelete.setBounds(94, 78, 70, 70);
		frame.getContentPane().add(btnDelete);
		
		JButton btnCancel = new JButton("C");
		btnCancel.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				textDisplay.setText("0");
				firstNumber = 0;
			}
		});
		btnCancel.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnCancel.setBounds(176, 78, 70, 70);
		frame.getContentPane().add(btnCancel);
		
		JButton btnPlus = new JButton("+");
		btnPlus.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String curr = textDisplay.getText();
				firstNumber = Integer.parseInt(curr);
				textDisplay.setText("0");
				func = "ADD";
			}
		});
		btnPlus.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnPlus.setBounds(258, 78, 70, 70);
		frame.getContentPane().add(btnPlus);
		
		// ROW2 
		
		JButton btn7 = new JButton("7");
		btn7.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn7.setBounds(12, 158, 70, 70);
		frame.getContentPane().add(btn7);
		
		JButton btn8 = new JButton("8");
		btn8.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn8.setBounds(94, 158, 70, 70);
		frame.getContentPane().add(btn8);
		
		JButton btn9 = new JButton("9");
		btn9.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn9.setBounds(176, 158, 70, 70);
		frame.getContentPane().add(btn9);
		
		JButton btnMinus = new JButton("-");
		btnMinus.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String curr = textDisplay.getText();
				firstNumber = Integer.parseInt(curr);
				textDisplay.setText("0");
				func = "Minus";
			}
		});
		btnMinus.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnMinus.setBounds(258, 158, 70, 70);
		frame.getContentPane().add(btnMinus);
		
		// ROW3
		
		JButton btn4 = new JButton("4");
		btn4.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn4.setBounds(12, 238, 70, 70);
		frame.getContentPane().add(btn4);
		
		JButton btn5 = new JButton("5");
		btn5.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn5.setBounds(94, 238, 70, 70);
		frame.getContentPane().add(btn5);
		
		JButton btn6 = new JButton("6");
		btn6.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn6.setBounds(176, 238, 70, 70);
		frame.getContentPane().add(btn6);
		
		JButton btnMulti = new JButton("*");
		btnMulti.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String curr = textDisplay.getText();
				firstNumber = Integer.parseInt(curr);
				textDisplay.setText("0");
				func = "Multi";
			}
		});
		
		btnMulti.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnMulti.setBounds(258, 238, 70, 70);
		frame.getContentPane().add(btnMulti);
		
		// ROW4
		
		JButton btn1 = new JButton("1");
		btn1.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn1.setBounds(12, 318, 70, 70);
		frame.getContentPane().add(btn1);
		
		JButton btn2 = new JButton("2");
		btn2.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn2.setBounds(94, 318, 70, 70);
		frame.getContentPane().add(btn2);
		
		JButton btn3 = new JButton("3");
		btn3.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn3.setBounds(176, 318, 70, 70);
		frame.getContentPane().add(btn3);
		
		JButton btnDivision = new JButton("/");
		btnDivision.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				String curr = textDisplay.getText();
				firstNumber = Integer.parseInt(curr);
				textDisplay.setText("0");
				func = "Division";
				
			}
		});
		btnDivision.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnDivision.setBounds(258, 318, 70, 70);
		frame.getContentPane().add(btnDivision);
		
		// ROW5
		
		JButton btn0 = new JButton("0");
		btn0.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btn0.setBounds(12, 398, 70, 70);
		frame.getContentPane().add(btn0);
		
		JButton btnDecimalPoint = new JButton(".");
		btnDecimalPoint.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnDecimalPoint.setBounds(94, 398, 70, 70);
		frame.getContentPane().add(btnDecimalPoint);
		
		JButton btnPlusandMinus = new JButton("+-");
		btnPlusandMinus.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnPlusandMinus.setBounds(176, 398, 70, 70);
		frame.getContentPane().add(btnPlusandMinus);
		
		JButton btnEqual = new JButton("=");
		btnEqual.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				switch(func) {
				case "ADD":{
					int currValue = Integer.parseInt(textDisplay.getText());
					textDisplay.setText((firstNumber + currValue)+""); 
					// ³¡¿¡ ""¸¦ ºÙÀÌ¸é Á¤¼ö¸¦ stringÀ¸·Î ¹Ù²Ü ¼ö ÀÖ´Ù. 
					break;
				}
				case "Minus": {
					int currValue = Integer.parseInt(textDisplay.getText());
					textDisplay.setText((firstNumber - currValue)+""); 
					break;	
				}
				
				case "Multi": {
					int currValue = Integer.parseInt(textDisplay.getText());
					textDisplay.setText((firstNumber * currValue)+""); 
					break;	
				}
				
				case "Division": {
					try {
					int currValue = Integer.parseInt(textDisplay.getText());
					textDisplay.setText((firstNumber / currValue)+""); 
					break;	
					}
					
					catch (ArithmeticException ae) {
						textDisplay.setText("0");
					}
				}
					
				}
				
			}
		});
		btnEqual.setFont(new Font("±¼¸²", Font.BOLD, 18));
		btnEqual.setBounds(258, 398, 70, 70);
		frame.getContentPane().add(btnEqual);
		
		btn0.addActionListener(new NumberActionListener(textDisplay,"0"));
		btn1.addActionListener(new NumberActionListener(textDisplay,"1"));
		btn2.addActionListener(new NumberActionListener(textDisplay,"2"));
		btn3.addActionListener(new NumberActionListener(textDisplay,"3"));
		btn4.addActionListener(new NumberActionListener(textDisplay,"4"));
		btn5.addActionListener(new NumberActionListener(textDisplay,"5"));
		btn6.addActionListener(new NumberActionListener(textDisplay,"6"));
		btn7.addActionListener(new NumberActionListener(textDisplay,"7"));
		btn8.addActionListener(new NumberActionListener(textDisplay,"8"));
		btn9.addActionListener(new NumberActionListener(textDisplay,"9"));
		
	}
}
class NumberActionListener implements ActionListener{
	public JLabel label;
	public String text;
	
	public NumberActionListener(JLabel l, String s) {
		label = l;
		text = s;
	}
	public void actionPerformed(ActionEvent e) {
		String curr = label.getText();
		if(curr.equals("0")) {
			label.setText(text);
		} else {
			label.setText(label.getText() + text);
		}
		
	}
}