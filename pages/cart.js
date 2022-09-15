import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import { FliesContext } from '../context/FliesContext';
import { useContext } from 'react';


export default function Cart() {

  const { cartFlies, cartQty, cartPrice } = useContext(FliesContext);

  console.log(cartFlies);

  return (
    <Layout>
      <section className={styles.panel}>
        {cartFlies.length > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 55 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Fly Item</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartFlies.map((fly) => (
                  <TableRow
                    key={fly.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {fly.title}
                    </TableCell>
                    <TableCell align="right">1</TableCell>
                    <TableCell align="right">${fly.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">TOTAL
                  </TableCell>
                  <TableCell align="right">{cartQty}</TableCell>
                  <TableCell align="right">${cartPrice}</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className={styles.emptyCart}>
            <h2 className={utilStyles.emptyCartFont}>Your cart is empty</h2>
          </div>
        )}
      </section>
    </Layout>);
}