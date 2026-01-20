import { useEffect, useState } from "react";

function VerifyEmail() {
    const query = new URLSearchParams(
        window.location.hash.split("?")[1]
    );
    const token = query.get("token");
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        if (!token) {
            setErr({ message: "Missing token" });
            setLoading(false);
            return;
        }
        fetch("http://127.0.0.1:3000/api/auth/verify-email", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({
                token,
            })
        }).then(async (res) => {
            const data =  await res.json()
            if (!res.ok) {
                    throw {
                        status: res.status,
                        message: data?.message,
                    };
                }
                return data;
        })
        .then(() => {
            setLoading(false)
        }).catch((err) => {
            setErr(err);
                setLoading(false);
        })
    }, [token])
    return (
        <div
        style={{
        border: "1px solid #ddd",
        borderRadius: "15px",
        padding: "20px",
        maxWidth: "400px",
        margin: "40px auto",
        textAlign: "center",
    }}
        >
            {loading && <p>Đang xác thực email ...</p>}
            {err && <p style={{color: "red"}}>Liên kết hết hạn hoặc không hợp lệ</p>}
            {!loading && !err && (
                <p style={{ color: "green" }}>
                    Xác thực email thành công 🎉
                </p>
            )}
        </div>
    )
}

export default VerifyEmail;