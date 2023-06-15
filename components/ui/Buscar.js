import React, {useState} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Router from 'next/router';

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSumit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url('static/img/buscar.png');
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
  `;

const Buscar = () => {

    const [busqueda, guardarBusqueda] = useState('');

    const buscarPublicacion = e => {
      e.preventDefault();

      if(busqueda.trim() === '') return;

      // Redireccionar a /Buscar
      Router.push({
        pathname: '/buscar',
        query: { q : busqueda }
      })
    }

  return (
    <form
      css={css`
      position: relative;
    `}
    onSubmit={buscarPublicacion}
    >
      <InputText 
        type="text" 
        placeholder='Buscar Publicaciones'
        onChange={e => guardarBusqueda(e.target.value)}
      />

      <InputSumit type="submit">Buscar</InputSumit>
    </form>
  )
}

export default Buscar;