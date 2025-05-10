          import React, { useState, useContext } from 'react';
          import {
            Grid, Typography, Avatar, Box, Chip, IconButton, FormControl,
            Select, MenuItem, TextField, InputLabel, Table, TableBody,
            TableCell, TableContainer, TableHead, TableRow, Paper, useTheme
          } from '@mui/material';
          import { motion } from 'framer-motion';
          import CallIcon from '@mui/icons-material/Call';
          import EmailIcon from '@mui/icons-material/Email';
          import FavoriteIcon from '@mui/icons-material/Favorite';

          import CallManagement from './CallManagement';
          import AccountCircleIcon from '@mui/icons-material/AccountCircle';
          import InfoIcon from '@mui/icons-material/Info';
          import LocationOnIcon from '@mui/icons-material/LocationOn';
          import SettingsIcon from '@mui/icons-material/Settings';
          import { ColorModeContext } from '../App';

          // Dummy profiles data for frontend display
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

          const FilterSection = ({ filters, setFilters }) => {
            const theme = useTheme();
  
            return (
              <Box
                sx={{
                  mb: 4,
                  p: 3,
                  backgroundColor: theme.palette.background.paper,
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
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : '#e0e0e0'
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
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : '#e0e0e0'
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
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : '#e0e0e0'
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
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : '#e0e0e0'
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
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : '#e0e0e0'
                          }
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            );
          };

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
            const theme = useTheme();
            const colorMode = useContext(ColorModeContext);

            // Filter profiles based on selected filters
            const filteredProfiles = dummyProfiles.filter(profile => {
              // Filter by gender
              if (filters.gender !== 'all' && profile.gender !== filters.gender) {
                return false;
              }
    
              // Filter by age range
              if (filters.ageRange !== 'all') {
                const [minAge, maxAge] = filters.ageRange.split('-');
                if (minAge && maxAge) {
                  if (profile.age < parseInt(minAge) || profile.age > parseInt(maxAge)) {
                    return false;
                  }
                } else if (filters.ageRange === '36+' && profile.age < 36) {
                  return false;
                }
              }
    
              // Filter by caste
              if (filters.caste !== 'all' && profile.caste !== filters.caste) {
                return false;
              }
    
              // Filter by sub-caste
              if (filters.subCaste !== 'all' && profile.subCaste !== filters.subCaste) {
                return false;
              }
    
              // Filter by search query
              if (filters.searchQuery && !profile.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
                return false;
              }
    
              return true;
            });

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
                          backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#fff8f0',
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
                                color: theme.palette.mode === 'dark' ? '#ff9d4d' : '#ff6b00',
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
                                color: theme.palette.mode === 'dark' ? '#ff9d4d' : '#ff6b00',
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
                                color: theme.palette.mode === 'dark' ? '#ff9d4d' : '#ff6b00',
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
                                color: theme.palette.mode === 'dark' ? '#ff9d4d' : '#ff6b00',
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
                                color: theme.palette.mode === 'dark' ? '#ff9d4d' : '#ff6b00',
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
                                backgroundColor: selectedProfile?.id === profile.id 
                                  ? theme.palette.mode === 'dark' ? '#333' : '#fff8f0' 
                                  : 'inherit',
                                '&:hover': {
                                  backgroundColor: selectedProfile?.id === profile.id 
                                    ? theme.palette.mode === 'dark' ? '#333' : '#fff8f0'
                                    : theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5'
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
                      {selectedProfile ? (
                        <Paper
                          elevation={3}
                          sx={{
                            p: 3,
                            borderRadius: '15px',
                            background: theme.palette.background.paper,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Avatar 
                              src={selectedProfile.avatar} 
                              sx={{ width: 80, height: 80, mr: 2 }}
                            />
                            <Box>
                              <Typography variant="h5">{selectedProfile.name}</Typography>
                              <Typography variant="body1" color="textSecondary">
                                {selectedProfile.age} years • {selectedProfile.location}
                              </Typography>
                            </Box>
                          </Box>
                
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom>Contact Information</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <CallIcon sx={{ mr: 1, color: '#1976d2' }} />
                              <Typography>{selectedProfile.phone}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <EmailIcon sx={{ mr: 1, color: '#1976d2' }} />
                              <Typography>{selectedProfile.email}</Typography>
                            </Box>
                          </Box>
                
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom>Profile Details</Typography>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <Typography variant="body2" color="textSecondary">Occupation</Typography>
                                <Typography variant="body1">{selectedProfile.occupation}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="body2" color="textSecondary">Education</Typography>
                                <Typography variant="body1">{selectedProfile.education}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="body2" color="textSecondary">Caste</Typography>
                                <Typography variant="body1">{selectedProfile.caste}</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="body2" color="textSecondary">Sub Caste</Typography>
                                <Typography variant="body1">{selectedProfile.subCaste}</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                
                          <Box>
                            <Typography variant="h6" gutterBottom>Interests</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {selectedProfile.interests.map((interest, idx) => (
                                <Chip 
                                  key={idx} 
                                  label={interest} 
                                  sx={{ 
                                    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                                    color: 'white'
                                  }} 
                                />
                              ))}
                            </Box>
                          </Box>
                
                          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton 
                              color="primary" 
                              sx={{ 
                                background: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.2)' : '#e3f2fd', 
                                '&:hover': { background: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.3)' : '#bbdefb' } 
                              }}
                            >
                              <CallIcon />
                            </IconButton>
                            <IconButton 
                              color="secondary" 
                              sx={{ 
                                background: theme.palette.mode === 'dark' ? 'rgba(245, 0, 87, 0.2)' : '#fce4ec', 
                                '&:hover': { background: theme.palette.mode === 'dark' ? 'rgba(245, 0, 87, 0.3)' : '#f8bbd0' } 
                              }}
                            >
                              <EmailIcon />
                            </IconButton>
                                              <IconButton 
                              color="error" 
                              sx={{ 
                                background: theme.palette.mode === 'dark' ? 'rgba(244, 67, 54, 0.2)' : '#ffebee', 
                                '&:hover': { background: theme.palette.mode === 'dark' ? 'rgba(244, 67, 54, 0.3)' : '#ffcdd2' } 
                              }}
                              onClick={() => {
                                setFavorites(prev => ({
                                  ...prev,
                                  [selectedProfile.id]: !prev[selectedProfile.id]
                                }));
                              }}
                            >
                              <FavoriteIcon 
                                sx={{
                                  color: favorites[selectedProfile.id] ? '#ff1744' : 'inherit'
                                }}
                              />
                            </IconButton>
                          </Box>
                        </Paper>
                      ) : (
                        <Paper
                          elevation={3}
                          sx={{
                            p: 3,
                            borderRadius: '15px',
                            background: theme.palette.background.paper,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '400px'
                          }}
                        >
                          <AccountCircleIcon sx={{ fontSize: 80, color: theme.palette.mode === 'dark' ? '#555' : '#e0e0e0', mb: 2 }} />
                          <Typography variant="h6" color="textSecondary">
                            Select a profile to view details
                          </Typography>
                        </Paper>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            );
          };

          export default ProfileView;



