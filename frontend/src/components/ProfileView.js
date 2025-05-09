import React, { useState } from 'react';
import {
  Grid, Typography, Avatar, Box, Chip, IconButton, FormControl,
  Select, MenuItem, TextField, InputLabel, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Remove duplicate import

import CallManagement from './CallManagement';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';

const dummyProfiles = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    caste: 'Brahmin',
    subCaste: 'Iyer',
    location: 'New York',
    education: 'MBA',
    occupation: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    interests: ['Reading', 'Traveling', 'Photography'],
    phone: '+1-234-567-8901',
    email: 'john.doe@email.com'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    age: 27,
    gender: 'Female',
    caste: 'Kshatriya',
    subCaste: 'Rajput',
    location: 'London',
    education: 'PhD',
    occupation: 'Data Scientist',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    interests: ['Yoga', 'Cooking', 'Art'],
    phone: '+44-789-012-3456',
    email: 'sarah.w@email.com'
  },
  {
    id: 3,
    name: 'Raj Patel',
    age: 32,
    gender: 'Male',
    caste: 'Vaishya',
    subCaste: 'Agarwal',
    location: 'Mumbai',
    education: 'B.Tech',
    occupation: 'Business Analyst',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    interests: ['Cricket', 'Music', 'Meditation'],
    phone: '+91-987-654-3210',
    email: 'raj.p@email.com'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    age: 28,
    gender: 'Female',
    caste: 'Brahmin',
    subCaste: 'Iyengar',
    location: 'Bangalore',
    education: 'M.Tech',
    occupation: 'Product Manager',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    interests: ['Dancing', 'Writing', 'Fitness'],
    phone: '+91-876-543-2109',
    email: 'priya.s@email.com'
  }
];

const FilterSection = ({ filters, setFilters }) => (
  <Box
    sx={{
      mb: 4,
      p: 3,
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
        transform: 'translateY(-2px)'
      }
    }}
  >
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            label="Gender"
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0'
              }
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={2}>
        <FormControl fullWidth>
          <InputLabel>Age Range</InputLabel>
          <Select
            value={filters.ageRange}
            onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
            label="Age Range"
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0'
              }
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="20-25">20-25</MenuItem>
            <MenuItem value="26-30">26-30</MenuItem>
            <MenuItem value="31-35">31-35</MenuItem>
            <MenuItem value="36+">36+</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={2}>
        <FormControl fullWidth>
          <InputLabel>Caste</InputLabel>
          <Select
            value={filters.caste}
            onChange={(e) => setFilters({ ...filters, caste: e.target.value })}
            label="Caste"
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0'
              }
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Brahmin">Brahmin</MenuItem>
            <MenuItem value="Kshatriya">Kshatriya</MenuItem>
            <MenuItem value="Vaishya">Vaishya</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={2}>
        <FormControl fullWidth>
          <InputLabel>Sub Caste</InputLabel>
          <Select
            value={filters.subCaste}
            onChange={(e) => setFilters({ ...filters, subCaste: e.target.value })}
            label="Sub Caste"
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0'
              }
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Iyer">Iyer</MenuItem>
            <MenuItem value="Iyengar">Iyengar</MenuItem>
            <MenuItem value="Rajput">Rajput</MenuItem>
            <MenuItem value="Agarwal">Agarwal</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Search by name"
          value={filters.searchQuery}
          onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#e0e0e0'
              }
            }
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

const ProfileView = () => {
  const [filters, setFilters] = useState({
    gender: 'all',
    ageRange: 'all',
    caste: 'all',
    subCaste: 'all',
    searchQuery: ''
  });
  const [favorites, setFavorites] = useState({});
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Add this if it's missing
  const filteredProfiles = dummyProfiles; // You can add your filtering logic here

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FilterSection filters={filters} setFilters={setFilters} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              '& .MuiTableCell-head': {
                backgroundColor: '#fff8f0',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: '1.1rem',
                      color: '#ff6b00',
                      fontWeight: 600,
                      padding: '16px 24px'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccountCircleIcon /> Profile
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '1.1rem',
                      color: '#ff6b00',
                      fontWeight: 600
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <InfoIcon /> Details
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '1.1rem',
                      color: '#ff6b00',
                      fontWeight: 600
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnIcon /> Location
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '1.1rem',
                      color: '#ff6b00',
                      fontWeight: 600
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FavoriteIcon /> Interests
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '1.1rem',
                      color: '#ff6b00',
                      fontWeight: 600
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SettingsIcon /> Actions
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredProfiles.map((profile) => (
                  <TableRow
                    key={profile.id}
                    hover
                    selected={selectedProfile?.id === profile.id}
                    onClick={() => setSelectedProfile(profile)}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: selectedProfile?.id === profile.id ? '#fff8f0' : 'inherit',
                      '&:hover': {
                        backgroundColor: selectedProfile?.id === profile.id ? '#fff8f0' : '#f5f5f5'
                      }
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src={profile.avatar} sx={{ width: 50, height: 50 }} />
                        <Box>
                          <Typography variant="subtitle1">{profile.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {profile.age} years
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {profile.occupation}<br />
                        {profile.education}<br />
                        {profile.caste} - {profile.subCaste}
                      </Typography>
                    </TableCell>
                    <TableCell>{profile.location}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                        {profile.interests.map((interest, idx) => (
                          <Chip key={idx} label={interest} size="small" />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton color="primary" size="small">
                          <CallIcon />
                        </IconButton>
                        <IconButton color="secondary" size="small">
                          <EmailIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFavorites(prev => ({
                              ...prev,
                              [profile.id]: !prev[profile.id]
                            }));
                          }}
                        >
                          <motion.div
                            animate={{
                              scale: favorites[profile.id] ? [1, 1.2, 1] : 1
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FavoriteIcon
                              sx={{
                                color: favorites[profile.id] ? '#ff1744' : 'inherit',
                                transition: 'color 0.3s ease'
                              }}
                            />
                          </motion.div>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <CallManagement profileData={selectedProfile} />
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ProfileView;