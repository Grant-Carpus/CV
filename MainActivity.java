package ac.uk.trurocollege.lesson13;

import java.util.Random;

import android.os.Bundle;
import android.os.Handler;
import android.app.Activity;
import android.view.Menu;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        countDown();
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
    public void moveIt(View v){
    	ImageView myImageView1 = (ImageView)findViewById(R.id.imageView1);
    	
    	Random rnd = new Random();
    	int theX = rnd.nextInt(600);
    	int theY = rnd.nextInt(800);
    	
    	myImageView1.setX(theX);
    	myImageView1.setY(theY);
    	//end of the setting the X & Y
    
    	TextView myTextView1 = (TextView)findViewById(R.id.textView1);
    	String theScoreSt = myTextView1.getText().toString();
    	int theScore = Integer.parseInt(theScoreSt);
    	theScore = theScore + 1;
    	myTextView1.setText(theScore + "");
    	
    }//end of moveIt
    
    public void countDown(){
    	Handler myHandler = new Handler();
    	//start of handler
    	myHandler.postDelayed(new Runnable(){
    		public void run (){
    			TextView myTextView2 = (TextView)findViewById(R.id.textView2);
    			String theCountS = myTextView2.getText().toString();
    			int theCount = Integer.parseInt(theCountS);
    			theCount = theCount - 1;
    			myTextView2.setText(theCount + "");
    			
    			if(theCount > 0)
    			{
    				countDown();
    			}
    			else
    			{
    				myTextView2.setText("GAME OVER");
    				//myImageView1.setVisibility(View.INVISIBLE);
    			}
    		}
    	},1000);
    	
    }//end of countDown
    
    
}
