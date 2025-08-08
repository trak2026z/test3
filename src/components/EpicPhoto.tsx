import React, { useEffect, useState } from "react";
import { getLatestNatural, buildImageUrl } from "../services/epicApi";
import { EpicItem } from "../types/epic";
import { Loader } from "./Loader";

export const EpicPhoto: React.FC<> = () => {
  const [photo, setPhoto] = useState<EpicItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getLatestNatural();
        if (data.length === 0) throw new Error("No images from nasa epic api");
        setPhoto(data[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!photo) return <p>No data</p>;

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">NASA EPIC - Image of the day</h2>
      <img
        src={buildImageUrl(photo)}
        alt={photo.caption}
        className="mx-auto max-w-full h-auto rounded shadow-lg"
      />
      <p className="mt-2 text-sm text-gray-600">{photo.caption}</p>
    </div>
  );
};