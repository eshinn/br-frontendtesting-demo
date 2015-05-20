var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    // return "scalene";
    if (a !== b && a!==c && b!==c)
      return "scalene";

    // return "isosceles"
    else
      return "isosceles";
    for (i=0, iMax=arguments.length; i<iMax; i++) {
      // arguments.
    }
  };
};
