import React, {useContext, useState, useEffect, useCallback} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import PageLayout from '../components/page-layout'
import UserContext from '../Context'
import ReactoSpinner from "../components/ReactoSpinner";
import Container from "../components/Container";
import {
    Card, CardText, CardBody, CardTitle, Button, Row, Col
} from 'reactstrap';


const Profile = () => {
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const context = useContext(UserContext);
    const params = useParams();
    const history = useHistory();

    const logOut = () => {
        context.logOut();
        history.push('/');
    };

    const getData = useCallback(async () => {
        const id = params.userid;
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const user = await response.json();
            setUsername(user.username);
            setPosts(user.posts && user.posts.length);
        }
    }, [params.userid, history]);

    useEffect(() => {
        getData()
    }, [getData])

    if (!username) {
        return (
            <PageLayout>
                <ReactoSpinner/>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <Container title="Profile">
                <Row>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <CardTitle>User: {username}</CardTitle>
                                <CardText>Articles: {posts}</CardText>

                                <Button color="secondary" className="text-white" onClick={logOut}>Logout</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </PageLayout>
    )
};

export default Profile;