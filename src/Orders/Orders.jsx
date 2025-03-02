import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import "./Orders.css";

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67c22add0009c8ceb7b4");

const databases = new Databases(client);

export const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await databases.listDocuments(
                "67c36b3a00308e4e0898",
                "67c36b4d001948fc15b7"
            );
            setOrders(response.documents);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const handleDelete = async (orderId) => {
        if (!window.confirm("Are you sure you want to delete this order?"))
            return;
        try {
            await databases.deleteDocument(
                "67c36b3a00308e4e0898",
                "67c36b4d001948fc15b7",
                orderId
            );
            setOrders(orders.filter((order) => order.$id !== orderId));
            alert("Order deleted successfully!");
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    return (
        <div className="table_component">
            <table>
                <caption>Orders List</caption>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Cost</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <tr key={order.$id}>
                                <td>{order.$id}</td>
                                <td>{order.name || "N/A"}</td>
                                <td>{order.phone || "N/A"}</td>
                                <td>{order.email || "N/A"}</td>
                                <td>
                                    {order.productImage ? (
                                        <img
                                            src={order.productImage}
                                            alt="Order"
                                            className="order-image"
                                            onClick={() =>
                                                setSelectedImage(
                                                    order.productImage
                                                )
                                            }
                                        />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td>
                                    {order.weight ? `${order.weight}g` : "N/A"}
                                </td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(order.$id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="no-orders">
                                No orders found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {selectedImage && (
                <div
                    className="image-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full Size"
                        className="modal-image"
                    />
                </div>
            )}
        </div>
    );
};
