import styled from "styled-components";
import { FormState } from "../Form"; // Import FormState context
import { useState, useContext } from "react"; // Import useState and useContext hooks
import { toast } from "react-toastify"; // Import toast for notifications
import { TailSpin } from "react-loader-spinner"; // Import TailSpin loader
import { create as IPFSHTTPClient } from "ipfs-http-client"; // Import IPFS HTTP client

// Retrieve project ID and secret for IPFS authentication from environment variables
const projectId = process.env.NEXT_PUBLIC_IPFS_ID;
const projectSecret = process.env.NEXT_PUBLIC_IPFS_KEY;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

// Create IPFS client instance with authentication headers
const client = IPFSHTTPClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

// FormRightWrapper component to handle the right side of the form
const FormRightWrapper = () => {
  const Handler = useContext(FormState); // Use FormState context

  // Define state for upload loading status and upload success status
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  // Function to handle file uploads to IPFS
  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true); // Set upload loading to true

    // Upload story to IPFS if it's not empty
    if (Handler.form.story !== "") {
      try {
        const added = await client.add(Handler.form.story);
        Handler.setStoryUrl(added.path); // Set story URL in the context
      } catch (error) {
        toast.warn(`Error Uploading Story`);
      }
    }

    // Upload image to IPFS if it's not null
    if (Handler.image !== null) {
      try {
        const added = await client.add(Handler.image);
        Handler.setImageUrl(added.path); // Set image URL in the context
      } catch (error) {
        toast.warn(`Error Uploading Image`);
      }
    }

    setUploadLoading(false); // Set upload loading to false
    setUploaded(true); // Set uploaded status to true
    Handler.setUploaded(true); // Update context uploaded status
    toast.success("Files Uploaded Successfully");
  };

  return (
    <FormRight>
      {/* Input for Required Amount and Category */}
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Required Amount</label>
            <Input
              onChange={Handler.FormHandler}
              value={Handler.form.requiredAmount}
              name="requiredAmount"
              type="number"
              placeholder="Required Amount"
            />
          </RowFirstInput>
          <RowSecondInput>
            <label>Choose Category</label>
            <Select
              onChange={Handler.FormHandler}
              value={Handler.form.category}
              name="category"
            >
              <option>Education</option>
              <option>Health</option>
              <option>Animal</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      {/* Input for Image */}
      <FormInput>
        <label>Select Image</label>
        <Image
          alt="dapp"
          onChange={Handler.ImageHandler}
          type="file"
          accept="image/*"
        />
      </FormInput>
      {/* Button to upload files to IPFS */}
      {uploadLoading ? (
        <Button>
          <TailSpin color="#fff" height={20} />
        </Button>
      ) : !uploaded ? (
        <Button onClick={uploadFiles}>Upload Files to IPFS</Button>
      ) : (
        <Button style={{ cursor: "no-drop" }}>
          Files uploaded Successfully
        </Button>
      )}
      {/* Button to start campaign */}
      <Button onClick={Handler.startCampaign}>Start Campaign</Button>
    </FormRight>
  );
};

// Styled components for styling the form
const FormRight = styled.div`
  width: 45%;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "poppins";
  margin-top: 10px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
`;

const RowFirstInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const RowSecondInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Select = styled.select`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
`;

const Image = styled.input`
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;

  &::-webkit-file-upload-button {
    padding: 15px;
    background-color: ${(props) => props.theme.bgSubDiv};
    color: ${(props) => props.theme.color};
    outline: none;
    border: none;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px;
  color: white;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
`;

export default FormRightWrapper;
