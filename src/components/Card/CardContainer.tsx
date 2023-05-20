import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import "./CardContainer.css";
import Arrow from "../../assets/arrow.svg";
interface CardContainerProps {
    cards: any;
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
    const [scrollLeft, setScrollLeft] = useState(false);
    const containerRef = useRef<any>(null);
    const cardRef = useRef<any>(null);

    const handleScroll = (scrollOffset: any) => {
        containerRef.current.scrollLeft += scrollOffset;
        setScrollLeft(containerRef.current.scrollLeft > 0);
    };

    return (
        <div className="card-container mx-sm-2" ref={containerRef}>
            <div className="arrow left-arrow" onClick={() => handleScroll(-250)}>
                {scrollLeft && <img className="img-thumbnail" src={Arrow} style={{ transform: "rotate(180deg)", backgroundColor: "transparent", border: "none" }} />}
            </div>
            <div className="card-wrapper">
                {cards.map((card: any, index: number) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <div className="arrow right-arrow" onClick={() => handleScroll(250)}>
                <img className="img-thumbnail" src={Arrow} style={{ backgroundColor: "transparent", border: "none" }} />
            </div>
        </div>
    );
};

export default CardContainer;