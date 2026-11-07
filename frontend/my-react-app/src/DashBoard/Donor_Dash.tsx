
import React from "react";
import MedShareLogo from "../images/MedShareLogo.png"

import { useForm } from "react-hook-form";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    MenuItem,
    Stack
} from "@mui/material";


function DonorForm() {

    // STEP 1: Initialize React Hook Form

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    // STEP 2: Function executed after successful validation

    const onSubmit = (data) => {
        console.log("Donor Medicine Details:", data);
    };


    // STEP 3: Create the UI

    return (

        <Container maxWidth="sm" sx={{
            mt: 5,
            mb: 5,
        }}>

            <Paper elevation={1} sx={{ p: 2 }}>
                <img
                    src={MedShareLogo}
                    style={{
                        width:"100px",
                        height:"auto",
                        display:"block",
                        margin:" 0 auto"
                        
                    }}
                />

                <Typography 
                    variant="h4" 
                    sx={{
                        textAlign:"center",
                        marginBottom:"10px"
                    }}

                >
                    Donate Medicine
                </Typography>


                {/* STEP 4: Form */}

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Stack spacing={2}>

                        {/* Medicine Name */}

                        <TextField
                            label="Medicine Name"
                            fullWidth

                            {...register("medicineName", {
                                required: "Medicine name is required"
                            })}

                            error={!!errors.medicineName}
                            helperText={errors.medicineName?.message}
                        />


                        {/* Generic Name */}

                        <TextField
                            label="Generic Name"
                            fullWidth

                            {...register("genericName")}
                        />


                        {/* Category */}

                        <TextField
                            select
                            label="Medicine Category"
                            defaultValue=""
                            fullWidth

                            {...register("category", {
                                required: "Please select a category"
                            })}

                            error={!!errors.category}
                            helperText={errors.category?.message}
                        >

                            <MenuItem value="Tablet">Tablet</MenuItem>
                            <MenuItem value="Capsule">Capsule</MenuItem>
                            <MenuItem value="Syrup">Syrup</MenuItem>
                            <MenuItem value="Injection">Injection</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>

                        </TextField>


                        {/* Manufacturer */}

                        <TextField
                            label="Manufacturer"
                            fullWidth

                            {...register("manufacturer", {
                                required: "Manufacturer is required"
                            })}

                            error={!!errors.manufacturer}
                            helperText={errors.manufacturer?.message}
                        />


                        {/* Batch Number */}

                        <TextField
                            label="Batch Number"
                            fullWidth

                            {...register("batchNumber", {
                                required: "Batch number is required"
                            })}

                            error={!!errors.batchNumber}
                            helperText={errors.batchNumber?.message}
                        />


                        {/* Quantity */}

                        <TextField
                            label="Quantity"
                            type="number"
                            fullWidth

                            {...register("quantity", {
                                required: "Quantity is required",
                                valueAsNumber: true,
                                min: {
                                    value: 1,
                                    message: "Quantity must be at least 1"
                                }
                            })}

                            error={!!errors.quantity}
                            helperText={errors.quantity?.message}
                        />


                        {/* Manufacturing Date */}

                        <TextField
                            label="Manufacturing Date"
                            type="date"
                            fullWidth

                            slotProps={{
                                inputLabel: { shrink: true }
                            }}

                            {...register("manufacturingDate", {
                                required: "Manufacturing date is required"
                            })}

                            error={!!errors.manufacturingDate}
                            helperText={errors.manufacturingDate?.message}
                        />


                        {/* Expiry Date */}

                        <TextField
                            label="Expiry Date"
                            type="date"
                            fullWidth

                            slotProps={{
                                inputLabel: { shrink: true }
                            }}

                            {...register("expiryDate", {
                                required: "Expiry date is required",
                                validate: (value) =>
                                    value > new Date().toISOString().split("T")[0]
                                    || "Medicine must not be expired"
                            })}

                            error={!!errors.expiryDate}
                            helperText={errors.expiryDate?.message}
                        />


                        {/* Medicine Condition */}

                        <TextField
                            select
                            label="Medicine Condition"
                            defaultValue=""
                            fullWidth

                            {...register("condition", {
                                required: "Please select medicine condition"
                            })}

                            error={!!errors.condition}
                            helperText={errors.condition?.message}
                        >

                            <MenuItem value="Sealed">Sealed</MenuItem>
                            <MenuItem value="Unopened">Unopened</MenuItem>
                            <MenuItem value="Damaged">Damaged</MenuItem>

                        </TextField>


                        {/* Description */}

                        <TextField
                            label="Description"
                            multiline
                            rows={3}
                            fullWidth

                            {...register("description")}
                        />


                        {/* Medicine Image */}

                        <Button
                            variant="outlined"
                            component="label"
                            sx={{
                                borderColor:"#1B5E20",
                                color:"#1B5E20"
                            }}
                        >
                            Upload Medicine Image

                            <input
                                type="file"
                                hidden
                                accept="image/*"

                                {...register("medicineImage", {
                                    required: "Please upload medicine image"
                                })}
                            />

                        </Button>

                        {errors.medicineImage && (
                            <Typography color="error" variant="caption">
                                {errors.medicineImage.message}
                            </Typography>
                        )}


                        {/* Pickup Address */}

                        <TextField
                            label="Pickup Address"
                            multiline
                            rows={3}
                            fullWidth

                            {...register("pickupAddress", {
                                required: "Pickup address is required"
                            })}

                            error={!!errors.pickupAddress}
                            helperText={errors.pickupAddress?.message}
                        />


                        {/* Submit */}

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                                backgroundColor:"#1B5E20"
                            }}
                        >
                            Submit Donation
                        </Button>

                    </Stack>

                </form>

            </Paper>

        </Container>
    );
}

export default DonorForm;
