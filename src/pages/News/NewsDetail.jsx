"use client";

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { getNewsById, getRelatedNews } from "../../services/newsApi";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const NewsDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState(null);
  const [related, setRelated] = useState([]);

  // Hàm lấy bản dịch đúng ngôn ngữ
  const trans = (field) => {
    if (!field) return "";
    return field[i18n.language] || field.nl || field.en || "";
  };

  useEffect(() => {
    const fetchData = async () => {
      const detail = await getNewsById(id);
      const relatedData = await getRelatedNews(parseInt(id));
      setNews(detail);
      setRelated(relatedData);
      window.scrollTo(0, 0);
    };
    fetchData();
  }, [id]);

  if (!news) return <p className="text-center my-16 text-xl">Loading...</p>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Container className="my-10 py-6">
        {/* Tiêu đề */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-[#f2692a] mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {trans(news.title)}
        </motion.h1>

        {/* Ngày */}
        <motion.p className="text-gray-500 mb-6" variants={fadeUp} custom={1}>
          {news.date}
        </motion.p>

        {/* Hình ảnh */}
        {news.image && (
          <motion.img
            src={news.image}
            alt={trans(news.title)}
            className="w-full rounded-3 mb-8 object-cover shadow-lg"
            style={{ maxHeight: "520px" }}
            variants={fadeUp}
            custom={2}
          />
        )}

        {/* Nội dung */}
        <motion.div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: trans(news.content) }}
          variants={fadeUp}
          custom={3}
        />

        {/* Tin liên quan */}
        {related.length > 0 && (
          <>
            <motion.h3
              className="text-2xl font-bold text-[#f2692a] mb-6"
              variants={fadeUp}
              custom={4}
            >
              {t("news.related_title", "Gerelateerd nieuws")}
            </motion.h3>

            <Row>
              {related.map((item, i) => (
                <Col md={4} key={item.id} className="mb-6">
                  <motion.div variants={fadeUp} custom={5 + i}>
                    <Card className="border-0 shadow hover:shadow-xl transition-all h-100">
                      {item.image && (
                        <div className="relative">
                          <Card.Img
                            variant="top"
                            src={item.image}
                            alt={trans(item.title)}
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <span
                            className="absolute top-2 left-2 px-3 py-1 bg-[#f2692a] text-white text-xs font-bold rounded"
                          >
                            {t("news.label", "NIEUWS")}
                          </span>
                        </div>
                      )}
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="text-lg font-semibold">
                          <Link
                            to={`/news/${item.id}`}
                            className="text-decoration-none text-[#122967] hover:text-[#f2692a] stretched-link"
                          >
                            {trans(item.title)}
                          </Link>
                        </Card.Title>
                        <Card.Text className="text-gray-500 text-sm mt-auto">
                          {item.date}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </motion.div>
  );
};

export default NewsDetail;