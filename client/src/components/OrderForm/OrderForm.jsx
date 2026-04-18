import { useState } from "react";
import styles from "./OrderForm.module.css";
import { PRODUCTS } from "../ProductList/ProductList";
import { useLanguage } from "../../i18n/LanguageContext";

const FEATURE_ICONS = ["🌿", "📦", "💬", "✨"];

export default function OrderForm({ selectedProduct, onSelectProduct }) {
  const { t, lang } = useLanguage();
  const o = t.order;
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function scrollToProducts() {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedProduct) {
      scrollToProducts();
      return;
    }
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${base}/api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: selectedProduct, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");
      if (data.whatsappUrl) {
        window.location.href = data.whatsappUrl;
      }
      setStatus("success");
      setForm({ name: "", phone: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="order-form">
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.info}>
          <p className={styles.eyebrow}>{o.eyebrow}</p>
          <h2 className={styles.title}>{o.title}</h2>
          <p className={styles.desc}>{o.desc}</p>
          <div className={styles.features}>
            {o.features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <div className={styles.featureIcon}>{FEATURE_ICONS[i]}</div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — card form */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{o.cardTitle}</h3>

          {/* Product picker */}
          <p className={styles.pickerLabel}>{o.pickerLabel}</p>
          <div className={styles.picker}>
            {PRODUCTS.map((p) => {
              const desc = t.productDesc[p.descKey];
              return (
                <button
                  key={p.name}
                  type="button"
                  className={`${styles.pickerItem} ${
                    selectedProduct === p.name ? styles.pickerItemActive : ""
                  }`}
                  onClick={() => onSelectProduct(p.name)}
                >
                  <span className={styles.pickerBadge}>{p.badge}</span>
                  <div className={styles.pickerInfo}>
                    <span className={styles.pickerName}>{p.name}</span>
                    <span className={styles.pickerDesc}>{desc}</span>
                  </div>
                  <span className={styles.pickerPrice}>{p.price}</span>
                  {selectedProduct === p.name && (
                    <span className={styles.pickerCheck}>✓</span>
                  )}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit}>
            <label className={styles.fieldLabel}>
              {o.nameLbl}
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder={o.namePlaceholder}
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              {o.phoneLbl}
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder={o.phonePlaceholder}
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>
            <button
              className={styles.btn}
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? o.loading : o.submit}
            </button>
          </form>

          {status === "success" && (
            <p className={styles.successMsg}>{o.success}</p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>{o.error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
