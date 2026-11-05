
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const services = [
  {
    icon: <VolunteerActivismIcon />,
    title: "Medicine Donation",
    description:
      "Donors can list eligible unused medicines and contribute towards a healthier community.",
  },
  {
    icon: <MedicalServicesIcon />,
    title: "Medicine Requests",
    description:
      "Verified NGOs can explore available medicines and request donations for their needs.",
  },
  {
    icon: <HealthAndSafetyIcon />,
    title: "Safe & Responsible",
    description:
      "Medicine details, expiry dates, and eligibility can be checked before approval.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description:
      "Register as a medicine donor or a healthcare organization.",
  },
  {
    number: "02",
    title: "List Medicines",
    description:
      "Donors provide medicine name, quantity, expiry date, and other details.",
  },
  {
    number: "03",
    title: "Request Donations",
    description:
      "Verified NGOs explore suitable medicine listings and submit requests.",
  },
  {
    number: "04",
    title: "Verification & Handover",
    description:
      "The donation is reviewed and coordinated according to eligibility requirements.",
  },
];

export default function HomePage() {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        id="home"
        sx={{
          background:
            "linear-gradient(135deg, #E6F7F4 0%, #F7FBFC 55%, #FFFFFF 100%)",
          py: { xs: 7, md: 10 },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Hero Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#D3EFEB",
                  color: "#07858B",
                  borderRadius: 20,
                  px: 2,
                  py: 1,
                  mb: 3,
                }}
              >
                <FavoriteIcon fontSize="small" />

                <Typography fontWeight={700} variant="body2">
                  HEALTHCARE WITH A HUMAN TOUCH
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.8rem", md: "4rem" },
                  lineHeight: 1.12,
                  color: "#173B45",
                  mb: 3,
                }}
              >
                Share Medicines.
                <br />
                <Box component="span" sx={{ color: "#07858B" }}>
                  Spread Hope.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#60747B",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.9,
                  maxWidth: 520,
                  mb: 4,
                }}
              >
                MedShare brings medicine donors and verified NGOs
                together to reduce medicine wastage and make
                healthcare support more accessible.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#contact"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.6,
                    backgroundColor: "#07858B",
                    "&:hover": { backgroundColor: "#066A70" },
                  }}
                >
                  Start Donating
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#services"
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderColor: "#07858B",
                    color: "#07858B",
                  }}
                >
                  Explore Services
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ mt: 4 }}
              >
                <GroupsIcon sx={{ color: "#07858B", fontSize: 30 }} />

                <Typography color="#60747B">
                  Together, we can make a difference.
                </Typography>
              </Stack>
            </Grid>

            {/* Hero Illustration */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  minHeight: { xs: 320, md: 450 },
                  borderRadius: 5,
                  position: "relative",
                  overflow: "hidden",
                  background:
                    "linear-gradient(145deg, #BDE9E2, #E7F7F5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    opacity: 0.6,
                    position: "absolute",
                  }}
                />

                <LocalHospitalIcon
                  sx={{
                    position: "relative",
                    fontSize: { xs: 150, md: 230 },
                    color: "#07858B",
                  }}
                />

                <Card
                  sx={{
                    position: "absolute",
                    bottom: 25,
                    left: 25,
                    right: 25,
                    borderRadius: 3,
                    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <VolunteerActivismIcon
                        sx={{ color: "#07858B", fontSize: 38 }}
                      />

                      <Box>
                        <Typography fontWeight={800}>
                          Every Donation Matters
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          A small contribution can create a big impact.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Container maxWidth="lg">
        <Box
          id="about"
          sx={{
            py: { xs: 7, md: 10 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ color: "#07858B", fontWeight: 800, mb: 1 }}
          >
            ABOUT MEDSHARE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#173B45",
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 3,
            }}
          >
            Healthcare Should Be Accessible to Everyone
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#60747B",
              lineHeight: 2,
              fontSize: "1.05rem",
            }}
          >
            MedShare is a Medicine Donation Management System
            designed to connect medicine donors, such as eligible
            individuals and pharmacies, with verified NGOs and
            healthcare organizations. Our platform promotes
            responsible medicine donation, helps reduce wastage,
            and supports communities in need.
          </Typography>
        </Box>
      </Container>

      {/* SERVICES SECTION */}
      <Box
        id="services"
        sx={{
          backgroundColor: "#F0F8F7",
          py: { xs: 7, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              sx={{ color: "#07858B", fontWeight: 800, mb: 1 }}
            >
              WHAT WE DO
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#173B45",
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              Our Services
            </Typography>

            <Typography color="#60747B" mt={2}>
              Simple solutions for responsible medicine donation.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={service.title}
              >
                <Card
                  sx={{
                    height: "100%",
                    p: 2,
                    border: "1px solid #E5ECEF",
                    boxShadow: "none",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-7px)",
                      boxShadow:
                        "0 15px 35px rgba(8,133,139,0.12)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 65,
                        height: 65,
                        borderRadius: 3,
                        backgroundColor: "#E5F5F3",
                        color: "#07858B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      fontWeight={800}
                      color="#173B45"
                      mb={2}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      color="#60747B"
                      lineHeight={1.9}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* HOW IT WORKS */}
      <Container maxWidth="lg">
        <Box
          id="how-it-works"
          sx={{ py: { xs: 7, md: 10 } }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              sx={{ color: "#07858B", fontWeight: 800, mb: 1 }}
            >
              SIMPLE PROCESS
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#173B45",
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              How MedShare Works
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {steps.map((step) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={step.number}
              >
                <Box
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    border: "1px solid #E5ECEF",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "#07858B",
                      backgroundColor: "#F6FCFB",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 45,
                      fontWeight: 800,
                      color: "#B8DEDA",
                      mb: 2,
                    }}
                  >
                    {step.number}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={800}
                    color="#173B45"
                    mb={2}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    color="#60747B"
                    lineHeight={1.8}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* WHY MEDSHARE */}
      <Box sx={{ backgroundColor: "#F0F8F7", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{ color: "#07858B", fontWeight: 800, mb: 1 }}
              >
                WHY MEDSHARE?
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "#173B45",
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  mb: 3,
                }}
              >
                Turning Unused Medicines into Hope
              </Typography>

              <Typography
                color="#60747B"
                lineHeight={1.9}
                mb={3}
              >
                Our platform aims to make the donation process
                organized, transparent, and accessible for
                medicine donors and verified organizations.
              </Typography>

              <Stack spacing={2}>
                {[
                  "Connect donors with verified NGOs",
                  "Encourage responsible medicine donation",
                  "Reduce eligible medicine wastage",
                  "Organize medicine request management",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <CheckCircleIcon sx={{ color: "#07858B" }} />

                    <Typography color="#173B45" fontWeight={600}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 5,
                  p: { xs: 3, md: 5 },
                  textAlign: "center",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                }}
              >
                <VolunteerActivismIcon
                  sx={{ fontSize: 100, color: "#07858B", mb: 2 }}
                />

                <Typography
                  variant="h4"
                  fontWeight={800}
                  color="#173B45"
                >
                  Give with Care
                </Typography>

                <Typography
                  color="#60747B"
                  sx={{ mt: 2, lineHeight: 1.9 }}
                >
                  A community-driven initiative to encourage
                  responsible donations and support healthcare
                  organizations.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA SECTION */}
      <Container maxWidth="lg">
        <Box
          id="contact"
          sx={{
            my: { xs: 6, md: 9 },
            py: { xs: 5, md: 7 },
            px: 3,
            backgroundColor: "#07858B",
            borderRadius: 5,
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 2,
            }}
          >
            Join the MedShare Community
          </Typography>

          <Typography
            sx={{
              color: "#E0F4F2",
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            Become part of a community that believes in
            responsible medicine donation and accessible
            healthcare support.
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: "#FFFFFF",
              color: "#07858B",
              "&:hover": {
                backgroundColor: "#E5F5F3",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
