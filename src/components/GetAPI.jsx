import React, { useState, useEffect } from "react";

const GetAPI = () => {
    const [data, setData] = useState([]);
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [showTable, setShowTable] = useState(false);

    const handleClick = async () => {
        const response = await fetch("https://api.sampleapis.com/beers/ale");
        const json = await response.json();
        console.log(json);
        setData(json);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowImage(true);
    };

    const handleClose = () => {
        setShowImage(false);
    };

    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
            <table className="t1">
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.price}</td>
                            <td>{item.name}</td>
                            <td>{item.rating.average}</td>
                            <td>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onClick={() => handleImageClick(item.image)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showImage && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <img
                            src={selectedImage}
                            alt={selectedImage}
                            style={{ width: "100%" }}
                        />
                        <button className="xclose" onClick={handleClose}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetAPI;
