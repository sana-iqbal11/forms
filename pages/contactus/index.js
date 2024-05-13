import { useState } from 'react';

const VoucherOrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [personName, setPersonName] = useState('');
  const [personPhone, setPersonPhone] = useState('');

  const [agreed, setAgreed] = useState<boolean>(false);

  const handleClick = () => {
    setAgreed(!agreed);
  };

  const isValid = () => agreed && name && email && value && personName && personPhone;

  return (
    <form name="voucher" data-netlify="true" className={styles.courseForm} method="POST" action="/poukaz-objednan" netlify-honeypot="bot-field">
      <h3>Objednávka voucheru</h3>
      <p className="hidden">
        <label>
          Do not fill this out if you are a human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="voucher" />
      <div >
        <label htmlFor="voucher_jmeno">Celé jméno</label>
        <input type="text" id="voucher_jmeno" name="jmeno" onChange={(e) => setName(e.target.value)} />
      </div>
      <div >
        <label htmlFor="voucher_email">Email</label>
        <input type="email" id="voucher_email" name="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div >
        <label>Typ poukazu</label>Dentální hygiena
      </div>
      <div >
        <label htmlFor="voucher_hodnota">Hodnota</label>
        <input type="text" id="voucher_hodnota" name="hodnota" onChange={(e) => setValue(e.target.value)} />
      </div>
      <div >
        <label htmlFor="voucher_prijemce">Komu poukaz daruji</label>
        <input type="text" id="voucher_prijemce" name="prijemce" onChange={(e) => setPersonName(e.target.value)} />
      </div>
      <div >
        <label htmlFor="voucher_tel">Telefon obdarovaného</label>
        <input type="phone" id="voucher_tel" name="telefon" onChange={(e) => setPersonPhone(e.target.value)} />
      </div>

      <div >
        <input type="checkbox" name="souhlas" id="souhlas" onClick={handleClick} />
        <label htmlFor="souhlas">Souhlasím se zpracováním všech údajů</label>
      </div>

      <div >
        <button type="submit" role="button" disabled={!isValid()}>
          Objednat
        </button>
      </div>
    </form>
  );
};

export default VoucherOrderForm;
