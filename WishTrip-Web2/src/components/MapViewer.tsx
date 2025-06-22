import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

interface MapViewerProps {
  searchPlace: string;
}

export default function MapViewer({ searchPlace }: MapViewerProps) {
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const geocode = async () => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: searchPlace }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          setCenter({
            lat: location.lat(),
            lng: location.lng(),
          });
        } else {
          console.error('Geocode failed:', status);
        }
      });
    };

    // API 로드 후 실행
    if (window.google && window.google.maps) {
      geocode();
    }
  }, [searchPlace]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCreRDaKk2VFqeeL0RJbg5GicivaV3XPpE">
      {center && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </LoadScript>
  );
}
