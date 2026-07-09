// Service IDs are used by both the translations and the image loader.
// To add a new service later:
// 1. Add the new ID here.
// 2. Add text for it in src/locales/en.json and src/locales/de.json.
// 3. Optional: add a matching image in src/assets/services using the same ID.
export const serviceIds = [
  'maintenance',
  'stairwell',
  'garden',
  'clearance',
  'assembly',
  'flooring',
  'drywall',
  'demolition',
  'transport',
  'technical',
]

// Automatically imports every service image and matches it by filename.
// Example: src/assets/services/garden.jpg becomes serviceImages.garden.
const serviceImageModules = import.meta.glob(
  '../assets/services/*.{avif,jpeg,jpg,png,webp}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
)

export const serviceImages = Object.fromEntries(
  Object.entries(serviceImageModules).map(([path, image]) => {
    const filename = path.split('/').pop()
    const serviceId = filename.replace(/\.[^.]+$/, '')

    return [serviceId, image]
  }),
)
