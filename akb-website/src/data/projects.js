import balconyDecking from '../assets/work/balcony-decking.jpeg'
import bathroomClearance from '../assets/work/bathroom-clearance.jpeg'
import clearanceBathroomTwo from '../assets/work/clearance-bathroom-two.jpeg'
import clearanceBedroomOne from '../assets/work/clearance-bedroom-one.jpeg'
import clearanceBedroomTwo from '../assets/work/clearance-bedroom-two.jpeg'
import clearanceHallway from '../assets/work/clearance-hallway.jpeg'
import clearanceKitchen from '../assets/work/clearance-kitchen.jpeg'
import clearanceLivingRoomThree from '../assets/work/clearance-living-room-three.jpeg'
import clearanceLivingRoomTwo from '../assets/work/clearance-living-room-two.jpeg'
import demolition from '../assets/work/demolition.jpeg'
import propertyClearance from '../assets/work/property-clearance.jpeg'
import technicalInstallation from '../assets/work/technical-installation.jpeg'
import timberConstruction from '../assets/work/timber-construction.jpeg'

// General portfolio images shown first in the work section.
export const selectedProjects = [
  { id: 'timber', image: timberConstruction },
  { id: 'decking', image: balconyDecking },
  { id: 'demolition', image: demolition },
  { id: 'technical', image: technicalInstallation },
]

// The first nine images are treated as before/after style showcase images.
export const beforeAfterProjects = [
  { id: 'kitchen', image: clearanceKitchen },
  { id: 'livingRoom', image: propertyClearance },
  { id: 'hallway', image: clearanceHallway },
  { id: 'bathroom', image: bathroomClearance },
  { id: 'bedroom', image: clearanceBedroomOne },
  { id: 'bathroomTwo', image: clearanceBathroomTwo },
  { id: 'livingSpace', image: clearanceLivingRoomTwo },
  { id: 'fullRoom', image: clearanceLivingRoomThree },
  { id: 'bedroomTwo', image: clearanceBedroomTwo },
]
