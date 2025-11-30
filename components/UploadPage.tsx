import { useState, useRef } from "react";
import { Upload, Loader2, RefreshCw, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatPrice = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type === "application/pdf") {
      setFile(dropped);
      setError("");
    } else {
      setError("Faqat .pdf fayllar qabul qilinadi!");
    }
  };

  const analyzeFile = () => {
    if (!file) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults([
        { mahsulot: "Noutbuk Lenovo ThinkPad", yet_narx: 18_500_000, net_narx: 13_200_000, holat: "Shubhali" },
        { mahsulot: "Printer HP LaserJet", yet_narx: 5_200_000, net_narx: 4_800_000, holat: "Normal" },
        { mahsulot: "Proyektor Epson", yet_narx: 14_000_000, net_narx: 8_900_000, holat: "Juda shubhali" },
        { mahsulot: "Stol va stullar (10 ta)", yet_narx: 12_000_000, net_narx: 6_500_000, holat: "Juda shubhali" },
      ]);
      setIsAnalyzing(false);
    }, 3000);
  };

  const reset = () => {
    setFile(null);
    setResults([]);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      <header>
        <div className="header-content">
          <Link to="/" className="logo">Tender WatchAI</Link>
          <Link to="/" style={{ color: "var(--text-light)", textDecoration: "none" }}>
            <ArrowLeft size={20} style={{ marginRight: "8px" }} />
            Orqaga
          </Link>
        </div>
      </header>

      <main style={{ padding: "120px 20px 100px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "48px", marginBottom: "16px" }}>
          Hujjat Tahlili
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-light)", fontSize: "18px", marginBottom: "50px" }}>
          PDF faylni yuklang — AI bir necha soniyada narxlarni tekshirib, xavfli joylarni aniqlaydi
        </p>

        <div style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "var(--shadow-large)" }}>
          <div
            className={`upload-area ${isDragging ? "dragover" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            style={{
              border: "3px dashed var(--accent-green)",
              borderRadius: "20px",
              padding: "60px 20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              background: isDragging ? "rgba(0,166,126,0.05)" : "rgba(10,37,64,0.02)"
            }}
          >
            <Upload size={72} color="var(--accent-green)" style={{ marginBottom: "20px" }} />
            <h3 style={{ fontSize: "28px", margin: "0 0 12px" }}>PDF faylni yuklang</h3>
            <p style={{ color: "var(--text-light)", fontSize: "18px" }}>
              Faylni shu yerga torting yoki bosing
            </p>
            {file && <div style={{ margin: "20px 0", fontWeight: 600, color: "var(--primary)" }}>Tanlangan: {file.name}</div>}
            {!file && <p style={{ color: "#888", marginTop: "12px" }}>Faqat .pdf format</p>}
            {isAnalyzing && <Loader2 className="spinner" size={50} style={{ margin: "20px auto" }} />}
            <input ref={fileInputRef} type="file" accept=".pdf" onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])} style={{ display: "none" }} />
          </div>

          {error && (
            <div style={{ marginTop: "20px", padding: "16px", background: "#fee", border: "1px solid #fbb", borderRadius: "12px", color: "#c33", display: "flex", alignItems: "center", gap: "10px" }}>
              <AlertCircle size={24} />
              {error}
            </div>
          )}

          {file && !isAnalyzing && results.length === 0 && (
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button onClick={analyzeFile} className="cta-button" style={{ padding: "16px 40px", fontSize: "18px" }}>
                Tahlil Qilish
              </button>
            </div>
          )}

          {results.length > 0 && (
            <>
              <h2 style={{ textAlign: "center", margin: "50px 0 30px" }}>Tahlil Natijalari</h2>
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Mahsulot Nomi</th>
                    <th>Tender narxi</th>
                    <th>Bozor narxi</th>
                    <th>Farq</th>
                    <th>Xavf darajasi</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, i) => {
                    const diff = Math.round(((item.yet_narx - item.net_narx) / item.net_narx) * 100);
                    return (
                      <tr key={i}>
                        <td>{item.mahsulot}</td>
                        <td>{formatPrice(item.yet_narx)} so‘m</td>
                        <td>{formatPrice(item.net_narx)} so‘m</td>
                        <td style={{ fontWeight: 700, color: diff > 30 ? "#e74c3c" : diff > 10 ? "#e67e22" : "#27ae60" }}>
                          {diff > 0 ? `+${diff}%` : `${diff}%`}
                        </td>
                        <td>
                          <span className={diff > 30 ? "status-dangerous" : diff > 10 ? "status-suspicious" : "status-normal"}>
                            {diff > 50 ? "Juda xavfli" : diff > 20 ? "Shubhali" : "Normal"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button onClick={reset} className="cta-button">
                  <RefreshCw size={20} style={{ marginRight: "10px" }} />
                  Yana bir fayl yuklash
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}