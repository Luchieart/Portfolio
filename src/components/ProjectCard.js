import { Col } from "react-bootstrap"
export const ProjectCard = ({ title, Stack, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx img-fluid mt-4">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{ Stack}</span>
                </div>
            </div>
        </Col>
    )
}