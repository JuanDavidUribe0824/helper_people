import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Buscar from '../ui/Buscar.js';
import Navegacion from './Navegacion.js';
import Boton from '../ui/Boton.js';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
    `;

const Logo = styled.p`
    color: #2949c6;
    font-size: 2.5rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;

`

const Header = () => {

    const { usuario, firebase, } = useContext(FirebaseContext);

    return (
        <header
            css={css`
            border-bottom: 2px solid var(--gris3);
            padding: 1rem 0;
            
            `}

        >

            <ContenedorHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                `}



                >

                    <Link href='/'>
                        <Logo>Helper People</Logo>
                    </Link>

                    {/*Buscador*/}
                    <Buscar />

                    {/*Nav*/}
                    <Navegacion />

                </div>

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    
                    `}

                >
                    {usuario ? (
                        <>
                            {
                                usuario && usuario.isAdmin ? (
                                    <Link href='/dashboard' css={css`margin-right: 2rem;`}>
                                        Hola {usuario.displayName}
                                    </Link>
                                ) : (
                                    <p css={css`margin-right: 2rem;`}>
                                        Hola {usuario.displayName}
                                    </p>
                                )
                            }
                            <Boton
                                bgColor="true"
                                onClick={() => firebase.cerrarSesion()}
                            >Cerrar Sesión
                            </Boton>
                        </>
                    ) : (
                        <>
                            <Link legacyBehavior href="/login">
                                <Boton bgColor="true">
                                    Login
                                </Boton>
                            </Link>

                            <Link legacyBehavior href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    )
                    }
                </div>

            </ContenedorHeader>


        </header>
    );
}

export default Header;
