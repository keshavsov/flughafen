import React from 'react'

export function DriveAndVehicle() {
    return (<>
        <div className='container-fluid bg-white'>
            <div className='container bg-white'>
                <div className='row '>
                    <h3 className='admin-booking my-5 '>Vehicle List</h3>
                    <div className='col-md-12 p-1 white-card mb-5'>
                        <table className="table  table-bordered " cellPadding="50%"  >
                            <thead>
                                <tr style={{ backgroundColor: "#F4F4F4" }}>
                                    <th className='label-admin-text text-center '>FAHERZEUG-ID</th>
                                    <th className='label-admin-text text-center '>MARKE</th>
                                    <th className='label-admin-text text-center '>MODELL</th>
                                    <th className='label-admin-text text-center '>FARBE</th>
                                    <th className='label-admin-text text-center '>NUMMER</th>
                                    <th className='label-admin-text text-center'>KATEGORIE</th>
                                    <th className='label-admin-text text-center '>DOKUMENTE</th>
                                    <th className='label-admin-text text-center '>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='text-admin'>290069905</th>
                                    <td className='text-admin'>Mercedes</td>
                                    <td className='text-admin'>Premium</td>
                                    <td className='text-admin'>Black</td>
                                    <td className='text-admin'>T6788</td>
                                    <td className='text-admin'>Business</td>
                                    <td className='text-admin'>GewerbeanmeldungTaxi-Mietwagenkonzession</td>
                                    <td className='text-admin'style={{ backgroundColor: "#FFF6EA" }}> <input type="radio"></input>Unapproved</td>
                                </tr>
                                <tr>
                                    <th className='text-admin'>290069905</th>
                                    <td className='text-admin'>Mercedes</td>
                                    <td className='text-admin'>Premium</td>
                                    <td className='text-admin'>Black</td>
                                    <td className='text-admin'>T6788</td>
                                    <td className='text-admin'>Business</td>
                                    <td className='text-admin'>GewerbeanmeldungTaxi-Mietwagenkonzession</td>
                                    <td className='text-admin p-3'style={{ backgroundColor: "#FFF6EA" }}> <input type="radio"></input>Unapproved</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    </>)
}
