var foo = 1;
function bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log(foo);
}
bar();


var a = 1;
function b() {
	a = 10;
	return;
	function a() {}
}
b();
console.log(a);





/**  77761
 * CJ Inquiry Tag
 */

(function () {
  if (window.analyticsdatalayer && analyticsdatalayer.listingid && analyticsdatalayer.userid && window.Bootstrapper && window.Bootstrapper.sendBacon) {  
    var gaSetCookie = window.gaSetCookie || function (name, value, hostname, minutes) {
            try {
                var expires = "";
                var date = new Date();
                if (typeof minutes === "string") {
                    date.setTime(date.getTime());
                    expires = "; expires=" + date.toGMTString();
                } else if (typeof minutes === "number") {
                    date.setTime(date.getTime() + (minutes * 60 * 1000));
                    expires = "; expires=" + date.toGMTString();
                }
                document.cookie = name + "=" + value + expires + "; path=/; domain=" + hostname + ";";
            } catch (err) {}
        };
    var gaReadCookie = window.gaReadCookie || function (name) {
            try {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                }
                return undefined;
            } catch (err) {}
        };
    if (analyticsdatalayer.viewname === "&#x2f;checkout") {
      var tripCost = (window.HOMEAWAY && HOMEAWAY.com && HOMEAWAY.com.modelJSON) ? window.HOMEAWAY.com.modelJSON.tripCost : '';    
      gaSetCookie("OLBPaymentCost", tripCost, window.location.hostname.replace(/^(.*?\.)/g, '.'), 17200); // not passing a time sets cookie as a session cookie  
    }else if (analyticsdatalayer.viewname === "&#x2f;confirmation"){

      var reservationUuid = (window.HOMEAWAY && HOMEAWAY.com && HOMEAWAY.com.modelJSON) ? window.HOMEAWAY.com.modelJSON.reservationUuid : '';
      var OLBPaymentCost = gaReadCookie("OLBPaymentCost");
      gaSetCookie("OLBPaymentCost", "reset", window.location.hostname.replace(/^(.*?\.)/g, '.'), "reset");
      
      var conf = {
        amount: (OLBPaymentCost || 100),
        discount: 0,
        oid: (reservationUuid || analyticsdatalayer.propertyid + analyticsdatalayer.userid),
        currency: "EUR"
      };

      if (location.hostname.indexOf("homeaway.co.uk") !== -1){
        conf.currency = "GBP";
        Bootstrapper.sendBacon(
          ["//www.emjcd.com/u?",
            "AMOUNT="     + conf.amount,
            "&DISCOUNT="  + conf.discount,
            "&CID="       + 1512623,
            "&OID="       + conf.oid,
            "&TYPE="      + 363654,
            "&CURRENCY="  + conf.currency,
            "&METHOD=IMG"
          ].join(""),
          "CJ / REPORT-1597 & REPORT-2056"
        );

      }else if(location.hostname.indexOf("fewo") !== -1){
        Bootstrapper.sendBacon(
          ["//www.kdukvh.com/u?",
            "AMOUNT="     + conf.amount,
            "&DISCOUNT="  + conf.discount,
            "&CID="       + 2691623,
            "&OID="       + conf.oid,
            "&TYPE="      + 364930,
            "&CURRENCY="  + conf.currency,
            "&METHOD=IMG"
          ].join(""),
          "CJ / REPORT-1597 & REPORT-2056"
        );
      }else if(location.hostname.indexOf("abritel.fr") !== -1){
        Bootstrapper.sendBacon(
          ["//www.kdukvh.com/u?",
            "AMOUNT="     + conf.amount,
            "&DISCOUNT="  + conf.discount,
            "&CID="       + 1508934,
            "&OID="       + conf.oid,
            "&TYPE="      + 364804,
            "&CURRENCY="  + conf.currency,
            "&METHOD=IMG"
          ].join(""),
          "CJ / REPORT-1597 & REPORT-2056"
        );
      }
    }
  }
})();​