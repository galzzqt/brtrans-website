import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBus, FaPlane, FaMapMarkedAlt, FaUsers, FaCalendarAlt, FaCar } from 'react-icons/fa';
import '../dist/css/service.css';

const Service = () => {
  const services = [
    {
      icon: <FaBus />,
      title: 'Sewa Bus Pariwisata',
      description: 'Layanan sewa bus pariwisata untuk perjalanan wisata, ziarah, study tour, atau kegiatan lainnya dengan berbagai pilihan armada.',
    },
    {
      icon: <FaPlane />,
      title: 'Antar Jemput Bandara',
      description: 'Layanan antar jemput dari dan ke bandara dengan armada yang nyaman dan tepat waktu.',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Paket Wisata',
      description: 'Berbagai pilihan paket wisata menarik ke destinasi populer dengan harga terjangkau.',
    },
    {
      icon: <FaUsers />,
      title: 'Sewa Mobil + Supir',
      description: 'Layanan sewa mobil dengan supir profesional untuk perjalanan bisnis atau liburan keluarga.',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Sewa Kendaraan Jangka Panjang',
      description: 'Solusi sewa kendaraan jangka panjang untuk kebutuhan perusahaan atau proyek.',
    },
    {
      icon: <FaCar />,
      title: 'Sewa Mobil Lepas Kunci',
      description: 'Layanan sewa mobil lepas kunci untuk kebebasan berkendara selama liburan atau perjalanan bisnis.',
    },
  ];

  return (
    <div className="service-bg">
      <Container className="py-5">
        <h1 className="text-center mb-5 service-title">Layanan Kami</h1>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="h-100 service-card">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <div className="service-icon mb-3">
                    {service.icon}
                  </div>
                  <Card.Title className="service-card-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
