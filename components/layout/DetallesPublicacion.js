import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from 'date-fns/locale';
import Link from 'next/link';

const Publicacion = styled.li`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
`;

const DescripcionPublicacion = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
`;

const Titulo = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    :hover {
        cursor: pointer;
    }
`;

const TextoDescripcion = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`;

const Comentarios = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
        border-radius: 30px;
    }
    img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
            margin: 0;
        }
    }
`;

const Imagen = styled.img`
max-width: 300px;
  height: auto;
`;

const Votos = styled.div`
    flex: 0 0 auto;
    text-align: center; 
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    div {
        font-size: 2rem;
    }
    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;

const DetallesPublicacion = ({ publicacion }) => {

    const { id, comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos } = publicacion;


    return (
        <Publicacion>
            <DescripcionPublicacion>
                <div>
                    <Imagen src={urlimagen} />
                </div>

                <div>
                    <Link href="/publicaciones/[id]" as={`/publicaciones/${id}`}>
                        <Titulo>{nombre}</Titulo>
                    </Link>
                    <TextoDescripcion>{descripcion}</TextoDescripcion>

                    <Comentarios>
                        <div>
                            <img src="/static/img/comentario.png" />
                            <p>{comentarios.length} Comentarios</p>
                        </div>
                    </Comentarios>

                    <p>Publicado hace {formatDistanceToNow(new Date(creado), { locale: es })}</p>
                </div>
            </DescripcionPublicacion>

            <Votos>
                <div> &#9650; </div>
                <p>{votos}</p>
            </Votos>
        </Publicacion>);
}

export default DetallesPublicacion;