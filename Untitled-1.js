   for (int i=0;i<Q;i++){                           //Move top part of the arm
    armservo.write (i);
    delay(50);
  }


   for (int i=90;i>0;i--){                          //Move the top half of the arm back to 0 degrees (straight up)
    armservo.write (i);
    delay(50);
   }