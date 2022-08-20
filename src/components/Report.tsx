import { useEffect, useState } from 'react';
import { FcCurrencyExchange } from 'react-icons/fc';

import styles from '../styles/components/Report.module.scss';

interface IReportProps {
  accountValue: number;
  paymentValue: number;
}

interface IBankNotesAndCoins {
  oneHundred: number;
  fifty: number;
  twenty: number;
  ten: number;
  five: number;
  two: number;
  one: number;
  fiftyCents: number;
  twentyFiveCents: number;
  tenCents: number;
  fiveCents: number;
}

export const Report = ({ accountValue, paymentValue }: IReportProps) => {
  const [bankNotesAndCoins, setBankNotesAndCoins] =
    useState<IBankNotesAndCoins>({} as IBankNotesAndCoins);

  useEffect(() => {
    function handleCalculateBankNotesAndCoins() {
      const money = paymentValue - accountValue;
      const oneHundred = Math.floor(money / 100);
      const fifty = Math.floor((money % 100) / 50);
      const twenty = Math.floor(((money % 100) % 50) / 20);
      const ten = Math.floor((((money % 100) % 50) % 20) / 10);
      const five = Math.floor(((((money % 100) % 50) % 20) % 10) / 5);
      const two = Math.floor((((((money % 100) % 50) % 20) % 10) % 5) / 2);
      const one = Math.floor(
        ((((((money % 100) % 50) % 20) % 10) % 5) % 2) / 1
      );
      const fiftyCents = Math.floor(
        (((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) / 0.5
      );
      const twentyFiveCents = Math.floor(
        ((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.5) / 0.25
      );
      const tenCents = Math.floor(
        (((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.5) % 0.25) /
          0.1
      );
      const fiveCents = Math.floor(
        ((((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.5) % 0.25) %
          0.1) /
          0.05
      );
      setBankNotesAndCoins({
        oneHundred,
        fifty,
        twenty,
        ten,
        five,
        two,
        one,
        fiftyCents,
        twentyFiveCents,
        tenCents,
        fiveCents,
      });
    }
    handleCalculateBankNotesAndCoins();
  }, [accountValue, paymentValue]);

  return (
    <section className={styles.content}>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>Relatório</h1>
        <div className={styles.report}>
          <section className={styles.infoPayment}>
            <FcCurrencyExchange className={styles.icon} />
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>Valor da conta</h2>
              {accountValue ? (
                <p className={styles.itemValueAccount}>R$ {accountValue}</p>
              ) : (
                <p className={styles.itemValueAccount}>Não informado</p>
              )}
            </div>
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>Valor do pagamento</h2>
              {paymentValue ? (
                <p className={styles.itemValuePayment}>R$ {paymentValue}</p>
              ) : (
                <p className={styles.itemValuePayment}>Não informado</p>
              )}
            </div>
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>Valor do troco</h2>
              {paymentValue - accountValue ? (
                <p className={styles.itemValueChange}>
                  R$ {paymentValue - accountValue}
                </p>
              ) : (
                <p className={styles.itemValueChange}>Não informado</p>
              )}
            </div>
          </section>
          <section className={styles.bankNoteCounting}>
            <h2 className={styles.bankNoteCountingTitle}>
              Contagem de notas e moedas
            </h2>
            {bankNotesAndCoins.oneHundred > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 100,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.oneHundred}
                </p>
              </div>
            )}
            {bankNotesAndCoins.fifty > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 50,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.fifty}
                </p>
              </div>
            )}
            {bankNotesAndCoins.twenty > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 20,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.twenty}
                </p>
              </div>
            )}
            {bankNotesAndCoins.ten > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 10,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.ten}
                </p>
              </div>
            )}
            {bankNotesAndCoins.five > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 5,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.five}
                </p>
              </div>
            )}
            {bankNotesAndCoins.two > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 2,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.two}
                </p>
              </div>
            )}
            {bankNotesAndCoins.one > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 1,00</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.one}
                </p>
              </div>
            )}
            {bankNotesAndCoins.fiftyCents > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 0,50</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.fiftyCents}
                </p>
              </div>
            )}
            {bankNotesAndCoins.twentyFiveCents > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 0,25</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.twentyFiveCents}
                </p>
              </div>
            )}
            {bankNotesAndCoins.tenCents > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 0,10</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.tenCents}
                </p>
              </div>
            )}
            {bankNotesAndCoins.fiveCents > 0 && (
              <div className={styles.bankNoteCountingItem}>
                <h3 className={styles.bankNoteCountingItemTitle}>R$ 0,05</h3>
                <p className={styles.bankNoteCountingItemValue}>
                  {bankNotesAndCoins.fiveCents}
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </section>
  );
};
