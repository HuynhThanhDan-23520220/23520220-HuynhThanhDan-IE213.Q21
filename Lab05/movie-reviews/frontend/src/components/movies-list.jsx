import { useState, useEffect } from 'react';
import MovieDataService from "../services/movies";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const MoviesList = (props) => {
    // Khởi tạo các state như trong ảnh image_17208d.png
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchRating, setSearchRating] = useState("");
    const [ratings, setRatings] = useState(["All Ratings"]);

    useEffect(() => {
        retrieveMovies();
        retrieveRatings();
    }, []);

    const retrieveMovies = async () => {
        try {
            const response = await MovieDataService.getAll();
            console.log(response.data);
            setMovies(response.data.movies);
        } catch (error) {
            console.error(error);
        }
    };

    const retrieveRatings = async () => {
        try {
            const response = await MovieDataService.getRatings();
            console.log(response.data);
            setRatings(["All Ratings", ...response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const onChangeSearchTitle = (e) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const onChangeSearchRating = (e) => {
        const searchrating = e.target.value;
        setSearchRating(searchrating);
    };

    const find = async (query, by) => {
        try {
            const response = await MovieDataService.find(query, by);
            console.log(response.data);
            setMovies(response.data.movies);
        } catch (error) {
            console.error(error);
        }
    };
    const findByTitle = () => {
        find(searchTitle, "title");
    };

    const findByRating = () => {
        if (searchRating === "All Ratings") {
            retrieveMovies();
        } else {
            find(searchRating, "rated");
        }
    };



    return (
        <div className="App">
            <Container className="mt-3">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Search by title"
                                    value={searchTitle}
                                    onChange={onChangeSearchTitle}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="button"
                                onClick={findByTitle}
                            >
                                Search
                            </Button>
                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Select onChange={onChangeSearchRating}>
                                    {ratings.map((rating, index) => (
                                        <option key={index} value={rating}>
                                            {rating}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="button"
                                onClick={findByRating}
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <Row>
                    {movies.map((movie) => {
                        return (
                            <Col key={movie._id}>
                                <Card style={{ width: '18rem'}}>
                                  
                                    <Card.Img src={movie.poster + "/100px180"} />

                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>

                                        <Card.Text>
                                            Rating: {movie.rated}
                                        </Card.Text>

                                        <Card.Text>
                                            {movie.plot}
                                        </Card.Text>

                                        <Link to={"/movies/" + movie._id}>
                                            View Reviews
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default MoviesList;