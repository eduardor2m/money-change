import { useState } from 'react';

import styles from '../styles/components/Form.module.scss';

interface IFormProps {
  handleCalculate: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: number,
    payment: number
  ) => void;
}

export const Form = ({ handleCalculate }: IFormProps) => {
  const [accountValue, setAccountValue] = useState(0);
  const [paymentValue, setPaymentValue] = useState(0);

  return (
    <form className={styles.form}>
      <section className={styles.wrapperTitle}>
        <h3>Supermarket</h3>
        <h1>Calcule o troco instataneamente</h1>
        <p>
          Digite o valor da compra e o dinheiro dado para pagar e calcule as
          cedulas e moedas para fazer a devolução
        </p>
      </section>
      <input
        type="number"
        placeholder="Digite o valor da conta que o cliente vai pagar"
        className={styles.input}
        value={accountValue === 0 ? '' : accountValue}
        onChange={(e) => setAccountValue(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Digite o valor que o cliente deu"
        className={styles.input}
        value={paymentValue === 0 ? '' : paymentValue}
        onChange={(e) => setPaymentValue(Number(e.target.value))}
      />
      <section className={styles.easyAccessBankNotes}>
        <div onClick={() => setPaymentValue(paymentValue + 100)}>
          + R$ 100,00
        </div>
        <div onClick={() => setPaymentValue(paymentValue + 50)}>+ R$ 50,00</div>
        <div onClick={() => setPaymentValue(paymentValue + 20)}>+ R$ 20,00</div>
        <div onClick={() => setPaymentValue(paymentValue + 10)}>+ R$ 10,00</div>
        <div onClick={() => setPaymentValue(paymentValue + 5)}>+ R$ 5,00</div>
        <div onClick={() => setPaymentValue(paymentValue + 2)}>+ R$ 2,00</div>
      </section>
      <button
        type="submit"
        className={styles.button}
        onClick={(e) => handleCalculate(e, accountValue, paymentValue)}
      >
        Calcular
      </button>
    </form>
  );
};
