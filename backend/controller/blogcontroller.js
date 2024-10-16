import { v2 as cloudinary } from "cloudinary";
import Blog from "../model/blogmodel.js";
const addProduct = async (req, res) => {
  try {
    const { comment } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const images = [image1].filter((item) => item !== undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        try {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        } catch (uploadError) {
          throw new Error("failed image");
        }
      })
    );

    const productData = {
      comment,
      image: imagesUrl,
    };

    const product = new Blog(productData);
    await product.save();

    res.json({
      success: true,
      message: "product added ",
      data: product,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error occuring.",
    });
  }
};

export { addProduct };
