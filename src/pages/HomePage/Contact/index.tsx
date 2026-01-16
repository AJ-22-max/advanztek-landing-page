import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, CircularProgress, Dialog, DialogContent, DialogActions } from '@mui/material';
import emailjs from '@emailjs/browser';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    Sparkles,
    CheckCircle,
    XCircle
} from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'success' | 'error'>('success');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                'service_k66e595', 
                'template_xelb90h',  
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message
                },
                '3MtKXhgrB7BKmFa36'
            );

            console.log('Email sent successfully:', result);
            setModalType('success');
            setShowModal(true);

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            console.error('Failed to send email:', error);
            setModalType('error');
            setShowModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Call Us',
            detail: '+234 806 223 5364',
            link: 'tel:+2348062235364',
            color: '#020066'
        },
        {
            icon: Mail,
            title: 'Email Us',
            detail: 'advanztek@gmail.com',
            link: 'mailto:advanztek@gmail.com',
            color: '#00D1FF'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            detail: 'Abuja, FCT, Nigeria',
            link: 'https://maps.app.goo.gl/kSfHnjt4ESmyw4KL7',
            color: '#020066'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            detail: 'Mon - Fri: 9AM - 4PM',
            color: '#00D1FF'
        }
    ];

    return (
        <Box
            id="contact-section"
            sx={{
                position: 'relative',
                backgroundColor: '#F8F9FD',
                py: { xs: 10, md: 14 },
                overflow: 'hidden'
            }}
        >
            {/* Decorative background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 209, 255, 0.08), transparent)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(2, 0, 102, 0.06), transparent)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none'
                }}
            />

            {/* Success/Error Modal */}
            <Dialog
                open={showModal}
                onClose={handleCloseModal}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: '20px',
                        p: 2
                    }
                }}
            >
                <DialogContent sx={{ textAlign: 'center', py: 4 }}>
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: modalType === 'success' ? '#4CAF5015' : '#f4433615',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                            animation: 'scaleIn 0.5s ease'
                        }}
                    >
                        {modalType === 'success' ? (
                            <CheckCircle size={48} color="#4CAF50" />
                        ) : (
                            <XCircle size={48} color="#f44336" />
                        )}
                    </Box>

                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            mb: 2,
                            color: '#020066'
                        }}
                    >
                        {modalType === 'success' ? 'Message Sent!' : 'Oops! Something Went Wrong'}
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "'Inter', sans-serif",
                            color: '#666',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            mb: 3
                        }}
                    >
                        {modalType === 'success' 
                            ? "Thank you for reaching out! We've received your message and will get back to you within 24 hours."
                            : "We couldn't send your message. Please try again or contact us directly at advanztek@gmail.com"
                        }
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Button
                        onClick={handleCloseModal}
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
                            color: '#fff',
                            fontWeight: 600,
                            px: 5,
                            py: 1.5,
                            borderRadius: '12px',
                            fontFamily: "'Poppins', sans-serif",
                            textTransform: 'none',
                            boxShadow: '0 4px 14px rgba(2, 0, 102, 0.25)',
                            '&:hover': {
                                boxShadow: '0 6px 20px rgba(2, 0, 102, 0.35)',
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Got it!
                    </Button>
                </DialogActions>
            </Dialog>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                        <Sparkles size={20} color="#00D1FF" />
                        <Typography
                            sx={{
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: '#00D1FF',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                fontFamily: "'Inter', sans-serif"
                            }}
                        >
                            Get In Touch
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: "'Dancing Script', cursive",
                            fontWeight: 700,
                            mb: 3,
                            color: '#020066',
                            fontSize: { xs: '2rem', md: '3rem' },
                            lineHeight: 1.2
                        }}
                    >
                        Let's Build Something Great Together
                    </Typography>

                    <Typography
                        sx={{
                            color: '#555',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.8,
                            maxWidth: '700px',
                            mx: 'auto',
                            fontFamily: "'Inter', sans-serif"
                        }}
                    >
                        Have a project in mind? We'd love to hear from you. Send us a message and we'll
                        respond as soon as possible.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                p: { xs: 3, md: 5 },
                                borderRadius: '24px',
                                backgroundColor: '#fff',
                                boxShadow: '0 10px 40px rgba(2, 0, 102, 0.08)',
                                border: '1px solid',
                                borderColor: 'rgba(2, 0, 102, 0.08)'
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 700,
                                    mb: 3,
                                    color: '#020066',
                                    fontSize: '1.5rem'
                                }}
                            >
                                Send Us a Message
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        name="name"
                                        label="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                fontFamily: "'Inter', sans-serif",
                                                '&:hover fieldset': {
                                                    borderColor: '#00D1FF',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#020066',
                                                }
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#020066',
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                fontFamily: "'Inter', sans-serif",
                                                '&:hover fieldset': {
                                                    borderColor: '#00D1FF',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#020066',
                                                }
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#020066',
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        label="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                fontFamily: "'Inter', sans-serif",
                                                '&:hover fieldset': {
                                                    borderColor: '#00D1FF',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#020066',
                                                }
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#020066',
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        name="subject"
                                        label="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                fontFamily: "'Inter', sans-serif",
                                                '&:hover fieldset': {
                                                    borderColor: '#00D1FF',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#020066',
                                                }
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#020066',
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid size={12}>
                                    <TextField
                                        fullWidth
                                        name="message"
                                        label="Your Message"
                                        multiline
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                fontFamily: "'Inter', sans-serif",
                                                '&:hover fieldset': {
                                                    borderColor: '#00D1FF',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#020066',
                                                }
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#020066',
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid size={12} sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        disabled={isSubmitting}
                                        endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send size={20} />}
                                        sx={{
                                            background: isSubmitting
                                                ? 'linear-gradient(135deg, #666 0%, #999 100%)'
                                                : 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
                                            color: '#fff',
                                            fontWeight: 700,
                                            px: 5,
                                            py: 1.8,
                                            borderRadius: '12px',
                                            fontSize: '1rem',
                                            fontFamily: "'Poppins', sans-serif",
                                            textTransform: 'none',
                                            boxShadow: '0 8px 24px rgba(2, 0, 102, 0.25)',
                                            '&:hover': {
                                                boxShadow: '0 12px 32px rgba(2, 0, 102, 0.35)',
                                                transform: 'translateY(-2px)',
                                            },
                                            '&:disabled': {
                                                cursor: 'not-allowed',
                                                transform: 'none'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    {/* Contact Information */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {/* Contact Info Cards */}
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <Box
                                        key={index}
                                        component="a"
                                        href={info.link}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 3,
                                            p: 3,
                                            borderRadius: '16px',
                                            backgroundColor: '#fff',
                                            border: '1px solid',
                                            borderColor: 'rgba(2, 0, 102, 0.08)',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateX(8px)',
                                                boxShadow: `0 8px 30px ${info.color}15`,
                                                borderColor: info.color,
                                                '& .icon-box': {
                                                    transform: 'scale(1.1)',
                                                    backgroundColor: info.color,
                                                    '& svg': {
                                                        color: '#fff'
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        <Box
                                            className="icon-box"
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '12px',
                                                backgroundColor: `${info.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                transition: 'all 0.3s ease',
                                                color: `${info.color}`
                                            }}
                                        >
                                            <IconComponent size={28} />
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem',
                                                    color: '#999',
                                                    mb: 0.5
                                                }}
                                            >
                                                {info.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: "'Inter', sans-serif",
                                                    fontWeight: 600,
                                                    fontSize: '1.1rem',
                                                    color: '#020066'
                                                }}
                                            >
                                                {info.detail}
                                            </Typography>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <style>
                {`
                    @keyframes scaleIn {
                        from {
                            transform: scale(0);
                            opacity: 0;
                        }
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default Contact;