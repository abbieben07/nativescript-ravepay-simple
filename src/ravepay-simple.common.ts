export class PaymentResponse
{
    status: String;
    ref: String;
    data: any;

    constructor(status: String, data: any, ref: String = '')
    {
        this.status = status;
        this.data = data;
        this.ref = ref;
    }
}

export interface PaymentOptions
{

    amount: String;

    country: String;

    currency: String;

    email: String;

    phoneNumber: String;

    firstName: String;

    lastName: String;

    encryptionKey: String;

    publicKey: String;

    isStaging: Boolean;

    transactionRef: String;

    narration: String;

    acceptAccountPayments: Boolean;

    acceptCardPayments: Boolean;

    acceptMpesaPayments: Boolean;

    acceptGHMobileMoneyPayments: Boolean;

    acceptUgMobileMoneyPayments: Boolean;

    acceptZmMobileMoneyPayments: Boolean;

    acceptRwfMobileMoneyPayments: Boolean;

    acceptSaBankPayments: Boolean;

    acceptUkPayments: Boolean;

    acceptAchPayments: Boolean;

    acceptBankTransferPayments: Boolean;

    acceptUssdPayments: Boolean;

    acceptBarterPayments: Boolean;

    acceptFrancMobileMoneyPayments: Boolean;

    allowSaveCardFeature: Boolean;

    isPreAuth: Boolean;

    theme: Number;

    setPaymentPlan: String;

    shouldDisplayFee: Boolean;

    showStagingLabel: Boolean;

    pay(): Promise<PaymentResponse>;

    init(): Promise<PaymentResponse>;
}

export class Common
{

    static PAYMENT_SUCCESS: String = 'success';
    static PAYMENT_ERROR: String = 'error';
    static PAYMENT_CANCELLED: String = 'cancelled';

    public amount: String;

    public country: String = "NG";

    public currency: String = "NGN";

    public email: String;

    public phoneNumber: String;

    public firstName: String;

    public lastName: String;

    public encryptionKey: String;

    public publicKey: String;

    public isStaging: Boolean = true;

    public transactionRef: String;

    public narration: String;

    public acceptAccountPayments: Boolean = false;

    public acceptCardPayments: Boolean = true;

    public acceptMpesaPayments: Boolean = false;

    public acceptGHMobileMoneyPayments: Boolean = false;

    public acceptUgMobileMoneyPayments: Boolean = false;

    public acceptZmMobileMoneyPayments: Boolean = false;

    public acceptRwfMobileMoneyPayments: Boolean = false;

    public acceptSaBankPayments: Boolean = false;

    public acceptUkPayments: Boolean = false;

    public acceptAchPayments: Boolean = false;

    public acceptBankTransferPayments: Boolean = false;

    public acceptUssdPayments: Boolean = false;

    public acceptBarterPayments: Boolean = false;

    public acceptFrancMobileMoneyPayments: Boolean = false;

    public allowSaveCardFeature: Boolean = false;

    public isPreAuth: Boolean = false;

    public theme: Number = 0;

    public setPaymentPlan: String;

    public shouldDisplayFee: Boolean = false;

    public showStagingLabel: Boolean = false;

    init(): Promise<PaymentResponse>
    {
        return new Promise((resolve, reject) =>
        {
            if (!this.amount)
            {
                return reject(new Error('Enter amount to charge'));
            }

            if (!this.country)
            {
                return reject(new Error('No country set'));
            }

            if (!this.currency)
            {
                return reject(new Error('No currency set'));
            }

            if (!this.email)
            {
                return reject(new Error('No email address set'));
            }

            if (!this.phoneNumber)
            {
                return reject(new Error('No phone number set'));
            }

            if (!this.firstName)
            {
                return reject(new Error('No firstname set'));
            }

            if (!this.lastName)
            {
                return reject(new Error('No lastname set'));
            }

            if (!this.encryptionKey)
            {
                return reject(new Error('Encryption key not set'));
            }

            if (!this.publicKey)
            {
                return reject(new Error('Public key not set'));
            }

            if (!this.transactionRef)
            {
                return reject(new Error('Transaction reference not set'));
            }

            resolve();
        });
    }
}
