import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Geocode from "react-geocode";

interface GetLocationProps {
  setLocation: (value: string) => void;
  setLat: (value: string) => void;
  setLon: (value: string) => void;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocation = ({
  setLocation,
  setLat,
  setLon,
}: GetLocationProps) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        Geocode.setApiKey(process.env.NEXT_PUBLIC_GEOCODING_KEY!);
        Geocode.setLanguage("en");
        Geocode.fromLatLng(latitude.toString(), longitude.toString()).then(
          (response) => {
            let city, country;
            for (
              let i = 0;
              i < response.results[0].address_components.length;
              i++
            ) {
              for (
                let j = 0;
                j < response.results[0].address_components[i].types.length;
                j++
              ) {
                switch (response.results[0].address_components[i].types[j]) {
                  case "locality":
                    city = response.results[0].address_components[i].long_name;
                    break;
                  case "country":
                    country =
                      response.results[0].address_components[i].long_name;
                    break;
                }
              }
            }
            setLocation(city + ", " + country);
            setLat(latitude.toString());
            setLon(longitude.toString());
          },
          (error) => {
            console.error(error);
          }
        );
      },
      () => console.log("Unable to retrieve your location")
    );
  } else {
    console.log("Geolocation not supported");
  }

  return location;
};
