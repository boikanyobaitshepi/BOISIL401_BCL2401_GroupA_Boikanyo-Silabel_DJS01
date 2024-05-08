// Given Parameters
// Renamed the variables to make it more descriptive
const velocity = { value: 10000, unit: 'km/h' }; // velocity (km/h)
const acceleration = { value: 3, unit: 'm/s^2' }; // acceleration (m/s^2)
const duration = { value: 3600, unit: 's' }; // seconds (1 hour)
const initialDistance = { value: 0, unit: 'km' }; // distance (km)
const fuelAmount = { value: 5000, unit: 'kg' }; // remaining fuel (kg)
const fuelBurnRate = { value: 0.5, unit: 'kg/s' }; // fuel burn rate (kg/s)

// Function to calculate new velocity based on acceleration
const calcNewVelocity = (acceleration, velocity, duration) => {
  // Validate input parameters
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof duration !== 'number') {
    throw new Error('Invalid input parameters for calcNewVelocity function');
  }

  // Calculate new velocity based on acceleration
  const newVelocity = velocity + (acceleration * duration);

  return newVelocity;
}

// Validate input parameters
if (velocity.unit !== 'km/h' || acceleration.unit !== 'm/s^2' || duration.unit !== 's' || initialDistance.unit !== 'km' || fuelAmount.unit !== 'kg' || fuelBurnRate.unit !== 'kg/s') {
  throw new Error('Invalid unit of measurement for one or more input parameters');
}

// Convert units to a common unit (m/s, m, kg)
const velocityInMetersPerSecond = velocity.value / 3.6;
const initialDistanceInMeters = initialDistance.value * 1000;

// Calculate new distance
const newDistanceInMeters = initialDistanceInMeters + (velocityInMetersPerSecond * duration.value);
const newDistanceInKilometers = newDistanceInMeters / 1000;

// Calculate remaining fuel
const remainingFuelInKilograms = fuelAmount.value - (fuelBurnRate.value * duration.value);

// Calculate new velocity based on acceleration
const newVelocityInMetersPerSecond = calcNewVelocity(acceleration.value, velocityInMetersPerSecond, duration.value);
const newVelocityInKilometersPerHour = newVelocityInMetersPerSecond * 3.6;

console.log(`Corrected New Velocity: ${newVelocityInKilometersPerHour} km/h`);
console.log(Corrected New Distance: ${newDistanceInKilometers} km);
console.log(Corrected Remaining Fuel: ${remainingFuelInKilograms} kg);
