import { useState, useRef } from "react";
import Card from "./Card";
import "./CardContainer.css";

interface CardContainerProps {
    cards: any;
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef<any>(null);

    const handleScroll = (scrollOffset: any) => {
        containerRef.current.scrollLeft += scrollOffset;
        setScrollLeft(containerRef.current.scrollLeft);
    };

    return (
        <div className="card-container" ref={containerRef}>
            <div className="arrow left-arrow" onClick={() => handleScroll(-250)}>
                <span>{"<-"}</span>
            </div>
            <div className="card-wrapper">
                {cards.map((card: any, index: number) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <div className="arrow right-arrow" onClick={() => handleScroll(250)}>
                <span>{"->"}</span>
            </div>
        </div>
    );
};

export default CardContainer;