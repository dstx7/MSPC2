import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './footer.css'

export default function App() {
  return (
    <MDBFooter bgColor='#0000' className='text-center text-lg-left' id="footer">
      <div className='text-center p-3'style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)'}} >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://github.com/dstx7'>
          Edinson Flórez
        </a>
      </div>
    </MDBFooter>
  );
}