<script>
function myFunction() {
  
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

 
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>
$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
});
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &gt; 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &lt; 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/imask/3.4.0/imask.min.js"></script>
window.onload = function () {
  const name = document.getElementById('name');
  const cardnumber = document.getElementById('cardnumber');
  const expirationdate = document.getElementById('expirationdate');
  const securitycode = document.getElementById('securitycode');
  const output = document.getElementById('output');
  const ccicon = document.getElementById('ccicon');
  const ccsingle = document.getElementById('ccsingle');
  const generatecard = document.getElementById('generatecard');
  let cctype = null;
  
  var cardnumber_mask = new IMask(cardnumber, {
    mask: [{
        mask: '0000 000000 00000',
        regex: '^3[47]\\d{0,13}',
        cardtype: 'american express'
      },
      {
        mask: '0000 0000 0000 0000',
        regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
        cardtype: 'discover'
      },
      {
        mask: '0000 000000 0000',
        regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
        cardtype: 'diners'
      },
      {
        mask: '0000 0000 0000 0000',
        regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
        cardtype: 'mastercard'
      },
      
      {
        mask: '0000 000000 00000',
        regex: '^(?:2131|1800)\\d{0,11}',
        cardtype: 'jcb15'
      },
      {
        mask: '0000 0000 0000 0000',
        regex: '^(?:35\\d{0,2})\\d{0,12}',
        cardtype: 'jcb'
      },
      {
        mask: '0000 0000 0000 0000',
        regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
        cardtype: 'maestro'
      },
     
      {
        mask: '0000 0000 0000 0000',
        regex: '^4\\d{0,15}',
        cardtype: 'visa'
      },
      {
        mask: '0000 0000 0000 0000',
        regex: '^62\\d{0,14}',
        cardtype: 'unionpay'
      },
      {
        mask: '0000 0000 0000 0000',
        cardtype: 'Unknown'
      }
    ],
    dispatch: function (appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');
      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }
    }
  });
 
  var expirationdate_mask = new IMask(expirationdate, {
    mask: 'MM{/}YY',
    groups: {
      YY: new IMask.MaskedPattern.Group.Range([0, 99]),
      MM: new IMask.MaskedPattern.Group.Range([1, 12]),
    }
  });
  
  var securitycode_mask = new IMask(securitycode, {
    mask: '0000',
  });
  // SVGICONS
  let amex = `      `;
  let visa = `         `;
  let diners = `       `;
  let discover = `      `;
  let jcb = `                      `;
  let maestro = `            `;
  let mastercard = `            `;
  let unionpay = `            `;
  let amex_single = `

`;
  let visa_single = `

`;
  let diners_single = `

`;
  let discover_single = `

`;
  let jcb_single = `

`;
  let maestro_single = `   

  

 

 

  `;
  let mastercard_single = `   

  

 

 

  `;
  let unionpay_single = `  

 

 

 

 

 

 

 

 

 `;
  
  const swapColor = function (basecolor) {
    document.querySelectorAll('.lightcolor')
      .forEach(function (input) {
        input.setAttribute('class', '');
        input.setAttribute('class', 'lightcolor ' + basecolor);
      });
    document.querySelectorAll('.darkcolor')
      .forEach(function (input) {
        input.setAttribute('class', '');
        input.setAttribute('class', 'darkcolor ' + basecolor + 'dark');
      });
  };
  //pop in the appropriate card icon when detected
  cardnumber_mask.on("accept", function () {
    console.log(cardnumber_mask.masked.currentMask.cardtype);
    switch (cardnumber_mask.masked.currentMask.cardtype) {
      case 'american express':
        ccicon.innerHTML = amex;
        ccsingle.innerHTML = amex_single;
        swapColor('green');
        break;
      case 'visa':
        ccicon.innerHTML = visa;
        ccsingle.innerHTML = visa_single;
        swapColor('lime');
        break;
      case 'diners':
        ccicon.innerHTML = diners;
        ccsingle.innerHTML = diners_single;
        swapColor('orange');
        break;
      case 'discover':
        ccicon.innerHTML = discover;
        ccsingle.innerHTML = discover_single;
        swapColor('purple');
        break;
      case ('jcb' || 'jcb15'):
        ccicon.innerHTML = jcb;
        ccsingle.innerHTML = jcb_single;
        swapColor('red');
        break;
      case 'maestro':
        ccicon.innerHTML = maestro;
        ccsingle.innerHTML = maestro_single;
        swapColor('yellow');
        break;
      case 'mastercard':
        ccicon.innerHTML = mastercard;
        ccsingle.innerHTML = mastercard_single;
        swapColor('lightblue');
        break;
      case 'unionpay':
        ccicon.innerHTML = unionpay;
        ccsingle.innerHTML = unionpay_single;
        swapColor('cyan');
        break;
      default:
        ccicon.innerHTML = '';
        ccsingle.innerHTML = '';
        swapColor('grey');
        break;
    }
  });
 
  const randomCard = function () {
    let testCards = [
      '4000056655665556',
      '5200828282828210',
      '371449635398431',
      '6011000990139424',
      '30569309025904',
      '3566002020360505',
      '6200000000000005',
      '6759649826438453',
    ];
    let randomNumber = Math.floor(Math.random() * testCards.length);
    cardnumber_mask.unmaskedValue = testCards[randomNumber];
  }
  generatecard.addEventListener('click', function () {
    randomCard();
  });
 
  document.querySelector('.preload').classList.remove('preload');
  document.querySelector('.creditcard').addEventListener('click', function () {
    if (this.classList.contains('flipped')) {
      this.classList.remove('flipped');
    } else {
      this.classList.add('flipped');
    }
  })
  input', function () {
    if (name.value.length == 0) {
      document.getElementById('svgname').innerHTML = 'John Doe';
      document.getElementById('svgnameback').innerHTML = 'John Doe';
    } else {
      document.getElementById('svgname').innerHTML = this.value;
      document.getElementById('svgnameback').innerHTML = this.value;
    }
  });
  cardnumber_mask.on('accept', function () {
    if (cardnumber_mask.value.length == 0) {
      document.getElementById('svgnumber').innerHTML = '0123 4567 8910 1112';
    } else {
      document.getElementById('svgnumber').innerHTML = cardnumber_mask.value;
    }
  });
  expirationdate_mask.on('accept', function () {
    if (expirationdate_mask.value.length == 0) {
      document.getElementById('svgexpire').innerHTML = '01/23';
    } else {
      document.getElementById('svgexpire').innerHTML = expirationdate_mask.value;
    }
  });
  securitycode_mask.on('accept', function () {
    if (securitycode_mask.value.length == 0) {
      document.getElementById('svgsecurity').innerHTML = '985';
    } else {
      document.getElementById('svgsecurity').innerHTML = securitycode_mask.value;
    }
  });
  //On Focus Events
  name.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
  });
  cardnumber.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
  });
  expirationdate.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
  });
  securitycode.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.add('flipped');
  });
};
function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
var expires = "expires="+d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i = 0; i < ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
}

function checkCookie() {
var user = getCookie("username");
if (user != "") {
alert("Äîáðî ïîæàëîâàòü ñíîâà " + user);
} else {
user = prompt("Ïîæàëóéñòà, ââåäèòå âàøå èìÿ:", "");
if (user != "" && user != null) {
setCookie("username", user, 365);
}
}
} 