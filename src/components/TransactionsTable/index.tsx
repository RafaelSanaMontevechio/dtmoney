import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Item 1</td>
            <td className="deposit">R$100,00</td>
            <td>teste</td>
            <td>12/01/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$100,00</td>
            <td>teste</td>
            <td>17/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
