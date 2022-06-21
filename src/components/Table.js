import React from 'react';
import classes from './Table.module.css'

const Table = () => {
    return (
        <div  >
            <table class="striped" class="highlight"  >
                <thead className={classes.WholeTable} >
                <tr >

                    <th className={classes.kolumna1}>Id</th>
                    <th className={classes.kolumna2}></th>
                    <th className={classes.kolumna3}></th>
                    <th className={classes.kolumna4}></th>
                    <th className={classes.kolumna5} >
                        <button onClick="myFunction()">Usuń</button></th>
                    <th className={classes.kolumna6}><button onClick="myFunction()">Pokaż</button></th>
                    <th className={classes.kolumna7}><button onClick="myFunction()">Edycja</button></th>
                </tr>
                </thead>

                <tbody>
                <tr container className={classes.RekordTabeli}>
                    <td className={classes.kolumna1}></td>
                    <td className={classes.kolumna2}></td>
                    <td className={classes.kolumna3}></td>
                    <td className={classes.kolumna4}></td>
                    <td className={classes.kolumna5}></td>
                    <td className={classes.kolumna6}></td>
                    <td className={classes.kolumna7}></td>
                </tr>
                <tr container className={classes.RekordTabeli}>
                    <td className={classes.kolumna1}></td>
                    <td className={classes.kolumna2}></td>
                    <td className={classes.kolumna3}></td>
                    <td className={classes.kolumna4}></td>
                    <td className={classes.kolumna5}></td>
                    <td className={classes.kolumna6}></td>
                    <td className={classes.kolumna7}></td>
                </tr>
                <tr container className={classes.RekordTabeli}>
                    <td className={classes.kolumna1}></td>
                    <td className={classes.kolumna2}></td>
                    <td className={classes.kolumna3}></td>
                    <td className={classes.kolumna4}></td>
                    <td className={classes.kolumna5}></td>
                    <td className={classes.kolumna6}></td>
                    <td className={classes.kolumna7}></td>
                </tr>
                <tr container className={classes.RekordTabeli}>
                    <td className={classes.kolumna1}></td>
                    <td className={classes.kolumna2}></td>
                    <td className={classes.kolumna3}></td>
                    <td className={classes.kolumna4}></td>
                    <td className={classes.kolumna5}></td>
                    <td className={classes.kolumna6}></td>
                    <td className={classes.kolumna7}></td>
                </tr>


                </tbody>
            </table>
        </div>
    );
};

export default Table;