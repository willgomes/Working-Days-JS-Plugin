(function(){

  this.WorkingDays = function(){

    /**
      * @Description Verify month change
    */
    function monthChange(dd, mm, yyyy) {
        var weekday = new Date();
        weekday.setMonth(mm);
        weekday.setDate(yyyy);
        if (dd > getDaysInMonth(mm, yyyy)) {
            dd = dd - getDaysInMonth(mm, yyyy);
            mm++;
            if (mm > 12) {
                mm = 1;
                yyyy++;
            }
        }
        return  dd + '/' + mm + '/' + yyyy;
    }

    /**
     * Get the max day in a month
     * @param  m Full month to be calculated
     * @param y Full year to be calculated
     */
    function getDaysInMonth(m, y) {
        return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
    }

    /**
      * @param int days
      * Return only working days
      */
    WorkingDays.prototype.week = function(days){
      var regularExp = /(\d+)\/(\d+)\/(\d+)/;
      var aux;
      var date = new Date();

      for (var i = 1; i <= days; i++){
        var dd = date.getDate() + 1;  /*Add an interval of days.*/
        var mm = date.getMonth();
        var yyyy = date.getFullYear();

        /* Checking the end of month */
        aux = monthChange(dd, (mm + 1), yyyy);
        aux = aux.match(regularExp);
        dd = parseInt(aux[1], 10);
        mm = parseInt(aux[2], 10);
        yyyy = parseInt(aux[3], 10);

        date.setDate(dd);
        date.setMonth(mm - 1);
        date.setYear(yyyy);

        /* Check weekend */
        if (date.getDay() === 0) {
            dd = dd + 1;
        } else if (date.getDay() === 6) {
            dd = dd + 2;
        }

        /* Checking the end of month */
        aux = monthChange(dd, mm, yyyy);
        aux = aux.match(regularExp);
        dd = parseInt(aux[1], 10);
        mm = parseInt(aux[2], 10);
        yyyy = parseInt(aux[3], 10);

        /*Necessary case day was saturday or sunday*/
        date.setDate(dd);
        dd = (dd < 10) ? '0' + dd : dd;
        mm = (mm < 10) ? '0' + mm : mm;
      }
      return dd+'/'+mm+'/'+yyyy;
    }
  }
}());
