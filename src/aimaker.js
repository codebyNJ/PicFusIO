import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import "./aimaker.css";
import sample2 from "./assets/image 12.png";
import sample3 from "./assets/image 10.png";

const Aimaker = () => {
  const [selectedStyle, setSelectedStyle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Hugging Face client
  const client = new HfInference("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"); // Replace with your Hugging Face API key

  const generateImage = async () => {
    if (!selectedStyle || !prompt) {
      alert("Please select a style and enter a prompt");
      return;
    }

    setIsLoading(true);

    // Select model based on style
    const model =
      selectedStyle === "retro"
        ? "Fihade/Retro-Collage-Art-Flux-Dev"
        : "prithivMLmods/Castor-Collage-Dim-Flux-LoRA";

    try {
      const image = await client.textToImage({
        model: model,
        inputs: prompt,
        parameters: { num_inference_steps: 5 },
        provider: "hf-inference",
      });

      // Check if image is successfully generated
      if (image) {
        const imageUrl = URL.createObjectURL(image); // Assuming the response returns a Blob or image URL
        setGeneratedImage(imageUrl);
      } else {
        throw new Error("Failed to generate image.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error generating image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="head">
        <h2>AI COLLAGE MAKER</h2>
        <p>Make simple abstract collage images on any topic by a prompt</p>
        <h5>Kindly use the trigger word to achieve the exact example outputs</h5>
      </div>

      <div className="content">
        <div className="prompt">
          <div className="rce">
            <img src={sample2} alt="Retro Collage Example" />
            <div className="rce-text">
              <h2>RETRO COLLAGE EXAMPLES</h2>
              <h3>Prompt</h3>
              <p>If-collage, a man sitting in office</p>
              <h3>Trigger Word</h3>
              <p>If-collage</p>
            </div>
          </div>

          {/* New Card */}
          <div className="rce">
            <img src={sample3} alt="Comic Collage Example" />
            <div className="rce-text">
              <h2>COMIC COLLAGE EXAMPLES</h2>
              <h3>Prompt</h3>
              <p>
                A dynamic scene from GTA (Grand Theft Auto) is depicted in a
                collage of multiple panels.
              </p>
              <h3>Trigger Word</h3>
              <p>Collage of multiple panels</p>
            </div>
          </div>
        </div>

        <div className="input">
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            <option value="" disabled selected>
              Select the style
            </option>
            <option value="retro">Retro Collage</option>
            <option value="comic">Comic Collage</option>
          </select>

          <input
            type="text"
            placeholder="Enter prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button onClick={generateImage} disabled={isLoading}>
            {isLoading ? "Generating..." : "Do the Magic"}
          </button>
        </div>

        {generatedImage && (
          <div className="generated-image-container">
           
            <img
              src={generatedImage}
              alt="Generated Collage"
              className="generated-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Aimaker;
