import { useState } from "react";
import type { ReactNode } from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  InputAdornment,
  MenuItem,
} from "@mui/material";

import {
  Favorite,
  LocalPharmacy,
  MedicalServices,
  VolunteerActivism,
  Search,
  Menu as MenuIcon,
  Close,
  ArrowForward,
  Groups,
  VerifiedUser,
  Handshake,
  Medication,
} from "@mui/icons-material";

const images = {
  hero: "/images/hero-healthcare.jpg",
  medicine: "/images/medicine-donation.jpg",
  ngo: "/images/ngo-hospital.jpg",
  fund: "/images/medicine-fund.jpg",
  support: "/images/medicine-support.jpg",
};

interface Service {
  title: string;
  description: string;
  button: string;
  icon: ReactNode;
  color: string;
}

interface Fund {
  title: string;
  description: string;
  fund: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "Donate Medicines",
    description:
      "Share eligible unused medicines with people who need them.",
    button: "Donate Now",
    icon: <Medication />,
    color: "#008f95",
  },
  {
    title: "Receive Medicines",
    description:
      "Request medicine support for yourself or your community.",
    button: "Request Now",
    icon: <MedicalServices />,
    color: "#0288d1",
  },
];

const funds: Fund[] = [
  {
    title: "General Fund",
    description:
      "Support healthcare initiatives and the overall MedShare mission.",
    fund: "GENERAL",
    icon: <Favorite />,
  },
  {
    title: "Medicine Assistance Fund",
    description:
      "Help provide medicine assistance to people in urgent need.",
    fund: "MEDICINE_ASSISTANCE",
    icon: <LocalPharmacy />,
  },
];

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Create your MedShare account.",
    icon: <Groups />,
  },
  {
    number: "02",
    title: "Choose Your Role",
    description: "Donate, request, or contribute.",
    icon: <VolunteerActivism />,
  },
  {
    number: "03",
    title: "Verification",
    description: "Our team reviews and verifies.",
    icon: <VerifiedUser />,
  },
  {
    number: "04",
    title: "Connect & Support",
    description: "Together, we make a difference.",
    icon: <Handshake />,
  },
];

function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [selectedFund, setSelectedFund] = useState("GENERAL");
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const openDialog = (title: string, fund?: string) => {
    setDialogTitle(title);

    if (fund) {
      setSelectedFund(fund);
    }

    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Medicines", href: "#medicines" },
    { label: "Donate", href: "#donate" },
    { label: "Funds", href: "#funds" },
    { label: "NGO Membership", href: "#ngo" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box
      sx={{
        background: "#f8fcfd",
        color: "#07304a",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}

      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          background: "#ffffff",
          color: "#07304a",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "75px",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="/images/medshare-logo.png"
            alt="MedShare - Shared Care, Healthy Living"
            sx={{
              width: { xs: 150, sm: 190 },
              height: { xs: 68, sm: 75 },
              objectFit: "contain",
              display: "block",
            }}
          />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: "none", lg: "flex" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: "#07304a",
                  fontWeight: 600,
                  fontSize: 13,
                  textTransform: "none",
                  "&:hover": {
                    color: "#008f95",
                    background: "#e0f7f5",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="outlined"
              onClick={() => openDialog("Login")}
              sx={{
                borderRadius: 5,
                color: "#008f95",
                borderColor: "#008f95",
                textTransform: "none",
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              onClick={() => openDialog("Register")}
              sx={{
                borderRadius: 5,
                background: "#008f95",
                textTransform: "none",
              }}
            >
              Register
            </Button>

            <IconButton
              onClick={() => setMobileMenu(!mobileMenu)}
              sx={{
                display: { xs: "flex", lg: "none" },
                color: "#008f95",
              }}
            >
              {mobileMenu ? <Close /> : <MenuIcon />}
            </IconButton>
          </Stack>
        </Toolbar>

        {mobileMenu && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              background: "#ffffff",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                sx={{
                  justifyContent: "flex-start",
                  color: "#07304a",
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </AppBar>

      {/* HERO */}

      <Box
        id="home"
        sx={{
          position: "relative",
          minHeight: { xs: 500, md: 450 },
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(225,248,247,0.98) 0%, rgba(225,248,247,0.92) 40%, rgba(225,248,247,0.25) 75%, rgba(0,90,110,0.15) 100%)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ maxWidth: 600, py: 6 }}>
            <Chip
              label="Medicine Donation & Support Platform"
              sx={{
                background: "#b9eeeb",
                color: "#005b70",
                fontWeight: 700,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: 40, md: 60 },
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#07304a",
              }}
            >
              Share Medicines.
              <br />
              <Box component="span" sx={{ color: "#008f95" }}>
                Share Hope.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: 17,
                lineHeight: 1.7,
                color: "#07304a",
              }}
            >
              MedShare connects people willing to donate or receive
              eligible medicines with verified NGOs and healthcare
              organizations.
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontSize: 14,
                color: "#526b7b",
              }}
            >
              Together, we can reduce medicine wastage and make
              healthcare support more accessible.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 3,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => openDialog("Get Started")}
                sx={{
                  background: "#008f95",
                  borderRadius: 5,
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                onClick={() => openDialog("Donate Money")}
                sx={{
                  borderColor: "#008f95",
                  color: "#005b70",
                  borderRadius: 5,
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Donate Money
              </Button>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mt: 3, color: "#005b70" }}
            >
              <VerifiedUser />

              <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
                Verified Organizations • Responsible Sharing
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
            {/* ABOUT AND SERVICES */}

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* ABOUT */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              id="about"
              sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid #d9eff5",
              }}
            >
              <Box
                component="img"
                src={images.medicine}
                alt="Medicine donation"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#008f95",
                    fontWeight: 800,
                    fontSize: 14,
                  }}
                >
                  ABOUT MEDSHARE
                </Typography>

                <Typography
                  sx={{
                    fontSize: 23,
                    fontWeight: 800,
                    mt: 1,
                  }}
                >
                  Healthcare Support Through Sharing
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: "#607887",
                    mt: 1,
                  }}
                >
                  MedShare is an intermediary platform connecting
                  individuals who want to donate or receive medicines
                  with verified NGOs and healthcare organizations.
                </Typography>

                <Button
                  onClick={() => openDialog("About MedShare")}
                  endIcon={<ArrowForward />}
                  sx={{
                    mt: 2,
                    background: "#008f95",
                    color: "white",
                    borderRadius: 5,
                    textTransform: "none",
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* INDIVIDUAL SERVICES */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              id="medicines"
              sx={{
                height: "100%",
                background: "#f0fbfc",
                borderRadius: 4,
                border: "1px solid #d9eff5",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#008f95",
                    fontWeight: 800,
                    fontSize: 14,
                  }}
                >
                  FOR INDIVIDUALS
                </Typography>

                <Typography
                  sx={{
                    fontSize: 23,
                    fontWeight: 800,
                    mt: 1,
                    mb: 2,
                  }}
                >
                  How Would You Like to Help?
                </Typography>

                <Grid container spacing={2}>
                  {services.map((service) => (
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      key={service.title}
                    >
                      <Card
                        sx={{
                          p: 2,
                          height: "100%",
                          borderRadius: 3,
                          border: "1px solid #d9eff5",
                          boxShadow: "none",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow:
                              "0 8px 20px rgba(0,100,120,0.10)",
                          },
                        }}
                      >
                        <Box sx={{ color: service.color }}>
                          {service.icon}
                        </Box>

                        <Typography
                          sx={{
                            fontSize: 15,
                            fontWeight: 800,
                            mt: 1,
                          }}
                        >
                          {service.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 12,
                            lineHeight: 1.6,
                            color: "#607887",
                            mt: 1,
                          }}
                        >
                          {service.description}
                        </Typography>

                        <Button
                          onClick={() => openDialog(service.title)}
                          endIcon={<ArrowForward />}
                          sx={{
                            mt: 2,
                            color: "#008f95",
                            fontSize: 12,
                            fontWeight: 700,
                            textTransform: "none",
                          }}
                        >
                          {service.button}
                        </Button>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* NGO MEMBERSHIP */}

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              id="ngo"
              sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid #d9eff5",
              }}
            >
              <Box
                component="img"
                src={images.ngo}
                alt="Healthcare organization"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#008f95",
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  FOR NGOs & HEALTHCARE ORGANIZATIONS
                </Typography>

                <Typography
                  sx={{
                    fontSize: 23,
                    fontWeight: 800,
                    mt: 1,
                  }}
                >
                  Be a Part of Our Mission
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: "#607887",
                    mt: 1,
                  }}
                >
                  Apply for membership to access bulk medicine
                  donations and healthcare support.
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => openDialog("NGO Membership")}
                  endIcon={<ArrowForward />}
                  sx={{
                    mt: 2,
                    background: "#008f95",
                    borderRadius: 5,
                    textTransform: "none",
                  }}
                >
                  Apply for Membership
                </Button>

                <Chip
                  icon={<VerifiedUser />}
                  label="Membership approval required"
                  sx={{
                    mt: 2,
                    background: "#e0f7f5",
                    color: "#005b70",
                    fontSize: 11,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* FUNDS AND HOW IT WORKS */}

      <Container maxWidth="xl" sx={{ pb: 4 }}>
        <Grid container spacing={3}>
          {/* FINANCIAL SUPPORT */}

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              id="funds"
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 4,
                background: "linear-gradient(135deg,#e0f8f5,#ffffff)",
                border: "1px solid #d5eeee",
              }}
            >
              <Typography
                sx={{
                  color: "#008f95",
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                FINANCIAL SUPPORT
              </Typography>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 800,
                  mt: 1,
                }}
              >
                Your Contribution Can Make a Difference
              </Typography>

              <Box
                component="img"
                src={images.fund}
                alt="Medicine assistance fund"
                sx={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 3,
                  my: 2,
                }}
              />

              <Grid container spacing={2}>
                {funds.map((fund) => (
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    key={fund.fund}
                  >
                    <Card
                      sx={{
                        p: 2,
                        height: "100%",
                        borderRadius: 3,
                        boxShadow: "none",
                        border: "1px solid #d9eff5",
                      }}
                    >
                      <Box sx={{ color: "#008f95" }}>
                        {fund.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: 15,
                          fontWeight: 800,
                          mt: 1,
                        }}
                      >
                        {fund.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 12,
                          lineHeight: 1.6,
                          color: "#607887",
                          mt: 1,
                        }}
                      >
                        {fund.description}
                      </Typography>

                      <Button
                        variant="contained"
                        onClick={() =>
                          openDialog("Donate Money", fund.fund)
                        }
                        endIcon={<ArrowForward />}
                        sx={{
                          mt: 2,
                          background: "#008f95",
                          borderRadius: 5,
                          fontSize: 12,
                          textTransform: "none",
                        }}
                      >
                        Donate Now
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* HOW IT WORKS */}

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 4,
                background: "linear-gradient(135deg,#f0fbfc,#e0f7f5)",
                border: "1px solid #d5eeee",
              }}
            >
              <Typography
                sx={{
                  color: "#008f95",
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                HOW IT WORKS
              </Typography>

              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 800,
                  mt: 1,
                }}
              >
                Simple Steps. Meaningful Impact.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {steps.map((step) => (
                  <Grid
                    size={{ xs: 6, md: 3 }}
                    key={step.number}
                  >
                    <Box sx={{ textAlign: "center", p: 1 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          borderRadius: "50%",
                          background: "#008f95",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mx: "auto",
                          fontWeight: 800,
                        }}
                      >
                        {step.number}
                      </Box>

                      <Box
                        sx={{
                          color: "#008f95",
                          mt: 2,
                        }}
                      >
                        {step.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 13,
                          mt: 1,
                        }}
                      >
                        {step.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#607887",
                          mt: 1,
                          lineHeight: 1.5,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box
                component="img"
                src={images.support}
                alt="Medicine support"
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 3,
                  mt: 3,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
            {/* SEARCH MEDICINES */}

      <Container maxWidth="xl" sx={{ pb: 5 }}>
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            textAlign: "center",
            background: "#e7f8f7",
          }}
        >
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            Looking for Medicine Support?
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#607887",
              mt: 1,
            }}
          >
            Search for medicines and explore available support.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              gap: 1.5,
              mt: 3,
              mx: "auto",
              width: "100%",
              maxWidth: 800,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              fullWidth
              placeholder="Search medicine by name..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              sx={{
                flex: 1,
                minWidth: 0,
                background: "white",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  height: 54,
                  borderRadius: 2,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              onClick={() => openDialog("Search Medicines")}
              endIcon={<ArrowForward />}
              sx={{
                minWidth: { xs: "100%", sm: 190 },
                height: 54,
                px: 3,
                background: "#008f95",
                borderRadius: 5,
                textTransform: "none",
                fontWeight: 700,
                whiteSpace: "nowrap",
                "&:hover": {
                  background: "#007c82",
                },
              }}
            >
              Search Medicines
            </Button>
          </Box>

          {search && (
            <Typography sx={{ mt: 2, fontSize: 13 }}>
              Search keyword: <strong>{search}</strong>
            </Typography>
          )}
        </Box>
      </Container>

      {/* FOOTER */}

      <Box
        id="contact"
        sx={{
          background: "linear-gradient(135deg,#003d52,#005b70)",
          color: "white",
          pt: 6,
          pb: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                component="img"
                src="/images/medshare-logo.png"
                alt="MedShare - Shared Care, Healthy Living"
                sx={{
                  width: 170,
                  maxWidth: "100%",
                  height: 65,
                  objectFit: "contain",
                  display: "block",
                  borderRadius: 1,
                }}
              />

              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 300,
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "#d6f2f2",
                }}
              >
                Connecting medicine donors, individuals, NGOs,
                and healthcare organizations to create a healthier
                tomorrow.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 700,
                  color: "#5de1d4",
                }}
              >
                Donate • Share • Care
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 2 }}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>
                Quick Links
              </Typography>

              {navItems.slice(0, 4).map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    display: "block",
                    color: "#d6f2f2",
                    textTransform: "none",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>
                Our Services
              </Typography>

              {[
                "Donate Medicines",
                "Request Medicines",
                "NGO Membership",
                "Financial Donations",
              ].map((item) => (
                <Button
                  key={item}
                  onClick={() => openDialog(item)}
                  sx={{
                    display: "block",
                    color: "#d6f2f2",
                    textTransform: "none",
                    textAlign: "left",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={{ fontWeight: 800, mb: 2 }}>
                Contact Us
              </Typography>

              <Typography sx={{ fontSize: 13, mb: 1 }}>
                Email: support@medshare.org
              </Typography>

              <Typography sx={{ fontSize: 13, mb: 1 }}>
                Phone: +91 98765 43210
              </Typography>

              <Typography sx={{ fontSize: 13 }}>
                Pune, Maharashtra, India
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              mt: 4,
              pt: 2,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography sx={{ fontSize: 11 }}>
              © 2026 MedShare. All rights reserved.
            </Typography>

            <Typography sx={{ fontSize: 11 }}>
              Together for a Healthier Tomorrow
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* INTERACTIVE DIALOG */}

      <Dialog
        open={dialogOpen}
        onClose={closeDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 800,
            color: "#07304a",
          }}
        >
          {dialogTitle}

          <IconButton onClick={closeDialog}>
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {dialogTitle === "Donate Money" ? (
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Typography sx={{ color: "#607887", fontSize: 14 }}>
                Choose your donation fund.
              </Typography>

              <TextField
                select
                fullWidth
                label="Select Fund"
                value={selectedFund}
                onChange={(event) =>
                  setSelectedFund(event.target.value)
                }
              >
                <MenuItem value="GENERAL">
                  General Fund
                </MenuItem>

                <MenuItem value="MEDICINE_ASSISTANCE">
                  Medicine Assistance Fund
                </MenuItem>
              </TextField>

              <TextField
                fullWidth
                label="Donation Amount (₹)"
                type="number"
                inputProps={{ min: 1 }}
              />

              <TextField
                fullWidth
                label="Your Name"
              />

              <TextField
                fullWidth
                label="Email Address"
                type="email"
              />
            </Stack>
          ) : (
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Typography sx={{ color: "#607887", fontSize: 14 }}>
                Continue to {dialogTitle} with MedShare.
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
              />

              <TextField
                fullWidth
                label="Email Address"
                type="email"
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
              />
            </Stack>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={closeDialog}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              alert(
                `${dialogTitle} is a frontend demo. Backend integration is required.`
              );

              closeDialog();
            }}
            sx={{
              background: "#008f95",
              textTransform: "none",
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default HomePage;