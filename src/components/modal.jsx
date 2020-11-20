
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';

function ModalPage({ allPokemonData, pokemonDetails }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pokemonsByType, setPokemonsByType] = useState([]);


    const getListOfPokemonsByType = () => {
        let selectedTypes = [];
        let AllPokemonWithSelectedTypes = [];
        let uniq = [];
        pokemonDetails[0].types.map(m => {
            selectedTypes.push(m.type.name);
        });
        allPokemonData.map((m, i) => {
            m.types.map((n, j) => {
                if (selectedTypes.includes(n.type.name)) {
                    AllPokemonWithSelectedTypes.push(allPokemonData[i].name);
                }
            });
        });

        // removing duplicated values
        uniq = [...new Set(AllPokemonWithSelectedTypes)];

        setPokemonsByType([...uniq]);
    };

    useEffect(() => {
        if (allPokemonData && pokemonDetails) {
            getListOfPokemonsByType();
        }
    }, [pokemonDetails]);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                show list of pokemons with this types
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> List of pokemons with selected type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {pokemonsByType.map(m => {
                            return (
                                <ListGroup.Item>{m}</ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Ok
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPage;