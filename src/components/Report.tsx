import { useEffect, useState } from 'react';

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
      const money = accountValue - paymentValue;
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
        <table className={styles.table}>
          <thead>
            <tr>
              <th
                style={{
                  color: bankNotesAndCoins.oneHundred > 0 ? 'green' : '#444',
                }}
              >
                Cedulas de 100R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.fifty > 0 ? 'green' : '#444',
                }}
              >
                Cedulas de 50R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.twenty > 0 ? 'green' : '#444',
                }}
              >
                Cedulas de 20R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.ten > 0 ? 'green' : '#444',
                }}
              >
                Cedulas de 10R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.five > 0 ? 'green' : '#444',
                }}
              >
                Cedulas de 5R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.two > 0 ? 'green' : '#444',
                }}
              >
                Cedulas de 2R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.one > 0 ? 'green' : '#444',
                }}
              >
                Moedas de 1R$
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.fiftyCents > 0 ? 'green' : '#444',
                }}
              >
                Moedas de 50 Centavos
              </th>
              <th
                style={{
                  color:
                    bankNotesAndCoins.twentyFiveCents > 0 ? 'green' : '#444',
                }}
              >
                Moedas de 25 Centavos
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.tenCents > 0 ? 'green' : '#444',
                }}
              >
                Moedas de 10 Centavos
              </th>
              <th
                style={{
                  color: bankNotesAndCoins.fiveCents > 0 ? 'green' : '#444',
                }}
              >
                Moedas de 5 Centavos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  color: bankNotesAndCoins.oneHundred > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.oneHundred}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.fifty > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.fifty}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.twenty > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.twenty}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.ten > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.ten}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.five > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.five}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.two > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.two}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.one > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.one}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.fiftyCents > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.fiftyCents}
              </td>
              <td
                style={{
                  color:
                    bankNotesAndCoins.twentyFiveCents > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.twentyFiveCents}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.tenCents > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.tenCents}
              </td>
              <td
                style={{
                  color: bankNotesAndCoins.fiveCents > 0 ? 'green' : '#444',
                }}
              >
                {bankNotesAndCoins.fiveCents}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};
