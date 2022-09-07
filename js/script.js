const urlForm = document.getElementById('generate-url-form');
const vCardForm = document.getElementById('generate-vCard-form');
const textForm = document.getElementById('generate-text-form');
const emailForm = document.getElementById('generate-email-form');
const smsForm = document.getElementById('generate-sms-form');
const wifiForm = document.getElementById('generate-wifi-form');
const facebookForm = document.getElementById('generate-facebook-form');
const pdfForm = document.getElementById('generate-pdf-form');
const mp3Form = document.getElementById('generate-mp3-form');
const appStoresForm = document.getElementById('generate-app-stores-form');
const imageForm = document.getElementById('generate-image-form');

const qr = document.getElementById('qrcode');

function showURLForm() {
    document.getElementById('generate-url-form').style.display = 'block';
}
function showVCardForm() {
    document.getElementById('generate-vCard-form').style.display = 'block';
}

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    // console.log(url, size);

    if (url === "") {
        alert('Please enter a URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);

            
            setTimeout(() => {
                const saveURL = qr.querySelector('img').src;
                createSaveBtn(saveURL);
            })
        }, 1000);
    }
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    if(saveBtn)
    {saveBtn.remove();}
}

const createSaveBtn = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
};

hideSpinner();

urlForm.addEventListener('submit', onGenerateSubmit)
vCardForm.addEventListener('submit', onGenerateSubmit)
textForm.addEventListener('submit', onGenerateSubmit)
emailForm.addEventListener('submit', onGenerateSubmit)
smsForm.addEventListener('submit', onGenerateSubmit)
wifiForm.addEventListener('submit', onGenerateSubmit)
facebookForm.addEventListener('submit', onGenerateSubmit)
pdfForm.addEventListener('submit', onGenerateSubmit)
mp3Form.addEventListener('submit', onGenerateSubmit)
appStoresForm.addEventListener('submit', onGenerateSubmit)
imageForm.addEventListener('submit', onGenerateSubmit)