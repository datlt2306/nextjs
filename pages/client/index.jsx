import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ClientPage = () => {
    const clients = [
        { id: "max", name: "Maximum" },
        { id: "manu", name: "Manuium" },
    ];
    return (
        <div>
            {clients.map((client) => (
                <li key={client.id}>
                    <Link href={`/client/${client.id}`}>{client.name}</Link>
                </li>
            ))}
        </div>
    );
};

export default ClientPage;
