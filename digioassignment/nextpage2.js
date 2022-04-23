
function validationAadhaar() {
    var aadhar = document.getElementById("aadhaar").value;
    var adharcardTwelveDigit = /^\d{12}$/;
    if (aadhar != '') {
        if (aadhar.match(adharcardTwelveDigit)) {
            return true;
        }
        else {
            alert("Enter valid Aadhar Number");
            return false;
        }
    }
}

function validationOtp() {
    var otp = document.getElementById("otp").value;
    var otpSixDigit = /^\d{6}$/;
    if (otp != '') {
        if (otp.match(otpSixDigit)) {
            return true;
        }
        else {
            alert("Enter valid OTP");
            return false;
        }
    }
}


















